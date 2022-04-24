import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};


const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));


export {ActionType, loadReviews};
