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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:{
      return {
        ...state,
        city: action.payload,
        offers: offers[action.payload],
        nearOffers: offers[action.payload].slice(0, 3),
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOffer: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {reducer};
