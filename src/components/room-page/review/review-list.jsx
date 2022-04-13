import React from "react";
import {reviewsType} from "../../../prop-type";
import {Review} from "./review";

const ReviewList = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        <>
          {reviews.map((review) => <Review key={review.id} review={review}/>)}
        </>
      </ul>
    </section>
  );
};

ReviewList.propTypes = {
  reviews: reviewsType,
};

export {ReviewList};
