import {combineReducers} from "redux";
import offersReducer from "./offers/offers-reducer";
import authDataReducer from "./auth/auth-data-reducer";
import interfaceReducer from "./interface/interface-reducer";
import reviewsReducer from "./reviews/reviews-reducer";

const ReducerName = {
  OFFERS: `OFFERS`,
  INTERFACE: `INTERFACE`,
  AUTH_DATA: `AUTH_DATA`,
  REVIEWS: `REVIEWS`,
  // NEAR_OFFERS: `NEAR_OFFERS`,
};

const rootReducer = combineReducers({
  [ReducerName.OFFERS]: offersReducer,
  [ReducerName.INTERFACE]: interfaceReducer,
  [ReducerName.AUTH_DATA]: authDataReducer,
  [ReducerName.REVIEWS]: reviewsReducer,
});

export default rootReducer;

