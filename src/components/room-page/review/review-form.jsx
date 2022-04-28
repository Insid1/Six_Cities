import React, {useRef} from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postReview} from "@reducer/reviews/api-actions";
import PropTypes from 'prop-types';
import RatingItem from "./rating-item";


const FormClass = {
  INPUT: `form__rating-input visually-hidden`,
  TEXT_AREA: `reviews__textarea form__textarea`,
};

const isSubmitDisabled = (rating, comment, isFetching) => {
  return !((rating > 0 && rating <= 5) && comment.length >= 50 && comment.length <= 300) || isFetching;
};

const Review = ({hotelId}) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);
  const [isFetching, setIsFetching] = useState(false);

  const handleChangeForm = (evt) => {
    switch (evt.target.className) {
      case FormClass.INPUT:
        setRating(evt.target.value);
        break;
      case FormClass.TEXT_AREA:
        setComment(evt.target.value);
        break;
    }
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    setIsFetching(true);
    dispatch(postReview(hotelId, rating, comment))
    .then(() => {
      formRef.current.reset();
      setRating(0);
      setComment(``);
      setIsFetching(false);
    })
    .catch(() =>{
      setIsFetching(false);
    }); // Обработать ошибку отправки комментария!

  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onChange={handleChangeForm}
      onSubmit={handleSubmitForm}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingItem/>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled(rating, comment, isFetching)}
        >Submit</button>
      </div>
    </form>
  );
};

Review.propTypes = {
  hotelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export {Review};
export default Review;
