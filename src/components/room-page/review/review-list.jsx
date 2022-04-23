import React from "react";
import {useSelector} from "react-redux";
import {Review} from "./review";

const ReviewList = () => {
  const reviews = useSelector((state) => state.OFFERS.reviews);
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        <>
          {reviews.map((review) => <Review key={review.id} review={review}/>)}
        </>
      </ul>
    </>
  );
};


export {ReviewList};
