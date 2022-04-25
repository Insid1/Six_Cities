import {ServerRoute} from "@src/const";
import {adaptReviewForClient} from "@util/adapter";
import {loadReviews} from "./action";

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(ServerRoute.COMMENTS + id)
    .then(({data}) => {
      const reviews = data.map(adaptReviewForClient);
      dispatch(loadReviews(reviews));
    })
);


export {fetchReviews};
