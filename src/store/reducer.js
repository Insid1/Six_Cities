import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {reviews} from "../mocks/reviews";
import {SortingType} from "../const";

// temp data for nearOffers
const nearOffers = offers.PARIS.slice(0, 3);

const initialState = {
  city: `PARIS`,
  offers: offers.PARIS,
  activeOffer: null,
  nearOffers,
  reviews,
  cities: Object.keys(offers),
  sortingType: `POPULAR`,
};

const sortOffers = (currOffers, sortType) => {
  const copiedOffers = currOffers.slice();
  switch (sortType) {
    case SortingType.POPULAR: {
      return copiedOffers;
    }
    case SortingType.PRICE_LOW_TO_HIGH: {
      return copiedOffers.sort((a, b) => a.price - b.price);
    }
    case SortingType.PRICE_HIGH_TO_LOW: {
      return copiedOffers.sort((a, b) => b.price - a.price);
    }
    case SortingType.TOP_RATED: {
      return copiedOffers.sort((a, b) => b.rating - a.rating);
    }
    default: {
      return copiedOffers;
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:{
      return {
        ...state,
        city: action.payload,
        offers: offers[action.payload],
        nearOffers: offers[action.payload].slice(0, 3),
        sortingType: SortingType.POPULAR,
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOffer: action.payload,
      };
    }
    case ActionType.SET_SORTING_TYPE: {
      return {
        ...state,
        sortingType: action.payload,
        offers: sortOffers(offers[state.city], action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export {reducer};
