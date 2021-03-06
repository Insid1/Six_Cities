import {ServerRoute} from "@src/const";
import {adaptReviewForClient} from "@util/adapter";
import {loadReviews} from "./action";

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(ServerRoute.REVIEWS + id)
    .then(({data}) => {
      const reviews = data.map(adaptReviewForClient);
      dispatch(loadReviews(reviews));
      return reviews;
    })
);

const postReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(ServerRoute.REVIEWS + id, {comment, rating})
    .then(() => {
      dispatch(fetchReviews(id));
    })
    .catch((err) => {
      throw new Error(err);
    })

);


export {fetchReviews, postReview};
