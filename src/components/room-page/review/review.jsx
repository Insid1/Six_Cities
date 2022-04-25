import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
import {RATING_WIDTH} from "../../../const";
import {reviewType} from "../../../prop-type";
const DateFormat = {
  SHORT: `MMMM YYYY`,
};


const Review = ({review}) => {
  const {comment, date, rating, user} = review;
  const adaptedDate = dayjs(date);
  const {avatarUrl, name} = user;
  return (
    <li className="reviews__item">
      <div style={{
        minWidth: `60px`,
      }} className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper"
        >
          <img className="reviews__avatar user__avatar"
            src={avatarUrl}
            alt="Reviews avatar"
            height="54px"
            width="54px"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${rating * RATING_WIDTH}%`
              }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={adaptedDate.utc().format()}>{adaptedDate.format(DateFormat.SHORT)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewType
};

export {Review};
