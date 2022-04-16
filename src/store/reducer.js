import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {reviews} from "../mocks/reviews";

const nearOffers = offers.PARIS.slice(0, 3);

const initialState = {
  city: `PARIS`,
  offers: offers.PARIS,
  activeOffer: null,
  nearOffers,
  reviews,
  cities: Object.keys(offers),
  map: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MAP:{
      return {
        ...state,
        map: action.payload,
      };
    }
    case ActionType.SET_CITY:{
      return {
        ...state,
        city: action.payload,
        offers: offers[action.payload],
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOffer: action.payload,
      };
    }
    case ActionType.FILL_OFFERS: {
      // console.log(1);
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};

export {reducer};
