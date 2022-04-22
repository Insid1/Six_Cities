import React from "react";
import PropTypes from 'prop-types';
import {useState} from "react";
import {connect} from "react-redux";
import {postComment} from "../../store/api-actions";


const FormClass = {
  INPUT: `form__rating-input visually-hidden`,
  TEXT_AREA: `reviews__textarea form__textarea`,
};

const checkDisabledSubmit = (rating, comment) => {
  return !((rating > 0 && rating <= 5) && comment.length >= 50 && comment.length <= 300);
};

const Comment = ({sendComment, id}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);
  const handleChangeForm = (evt) => {
    evt.preventDefault();
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
    sendComment(id, {rating, comment});
  };
  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onChange={handleChangeForm}
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
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
          disabled={checkDisabledSubmit(rating, comment)}
        >Submit</button>
      </div>
    </form>
  );
};

Comment.propTypes = {
  sendComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, {comment, rating}) {
    dispatch(postComment(id, {comment, rating}));
  }
});

export {Comment};
export default connect(null, mapDispatchToProps)(Comment);
