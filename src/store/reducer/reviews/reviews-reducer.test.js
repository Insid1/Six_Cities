import {ActionType, loadReviews} from "./action";
import reviewsReducer from "./reviews-reducer";
import {initialState} from "./reviews-reducer";

describe(`reducer works correctly with given data`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reviewsReducer(undefined, {}))
      .toEqual(initialState);
  });
  it(`Reducer with given empty parameters as initial state should return given parametrs`, () => {
    expect(reviewsReducer({reviews: []}, {}))
      .toEqual({reviews: []});
  });
  it(`Reducer with given parameters as initial state should return given parametrs`, () => {
    expect(reviewsReducer({reviews: [1, 2, 3, 4, 5]}, {}))
      .toEqual({reviews: [1, 2, 3, 4, 5]});
  });
  it(`Reducer with given parameter sshould return given parametrs`, () => {
    const state = {
      reviews: [1, 2, 3],
    };
    expect(reviewsReducer(state, {})).toEqual(state);

    const loadNoOffers = {
      type: ActionType.LOAD_REVIEWS,
      payload: []
    };

    expect(reviewsReducer(state, loadNoOffers)).toEqual({reviews: []});
  });
  it(`Reducer with given action creator should return action creator parametrs`, () => {
    const state = {
      reviews: [1, 2, 3],
    };
    expect(reviewsReducer(state, loadReviews([]))).toEqual({reviews: []});
    expect(reviewsReducer(state, loadReviews([1, 2, 3, 4, 5]))).toEqual({reviews: [1, 2, 3, 4, 5]});
  });
});
