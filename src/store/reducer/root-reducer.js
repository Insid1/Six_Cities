import {combineReducers} from "redux";
import offersReducer from "./offers/offers-reducer";
import authDataReducer from "./auth/auth-data-reducer";
import interfaceReducer from "./interface/interface-reducer";
import reviewsReducer from "./reviews/reviews-reducer";
import nearOfferReducer from "./near-offers/near-offers-reducer";
import favoritesReducer from "./favorites/favorites-reducer";

const ReducerName = {
  OFFERS: `OFFERS`,
  INTERFACE: `INTERFACE`,
  AUTH_DATA: `AUTH_DATA`,
  REVIEWS: `REVIEWS`,
  NEAR_OFFERS: `NEAR_OFFERS`,
  FAVORITES: `FAVORITES`,
};

const rootReducer = combineReducers({
  [ReducerName.OFFERS]: offersReducer,
  [ReducerName.INTERFACE]: interfaceReducer,
  [ReducerName.AUTH_DATA]: authDataReducer,
  [ReducerName.REVIEWS]: reviewsReducer,
  [ReducerName.NEAR_OFFERS]: nearOfferReducer,
  [ReducerName.FAVORITES]: favoritesReducer,

});

export default rootReducer;

