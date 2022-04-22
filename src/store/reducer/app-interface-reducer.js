import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";
import {SortingType} from "../../const";
import {capitalize} from "../../util.js/common";

const initialState = {
  offers: [],
  city: `PARIS`,
  activeOffer: null,
  sortingType: `POPULAR`,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  selectedOffer: null,
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

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
};

const appInterfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADER: {
      return {
        ...state,
        isDataLoaded: false,
      };
    }
    case ActionType.FILL_OFFERS: {
      return {
        ...state,
        offers: filterByCity(state.allOffers, action.payload),
      };
    }
    case ActionType.SET_CITY: {
      return {
        ...state,
        city: action.payload,
        offers: filterByCity(state.allOffers, action.payload),
        nearOffers: state.allOffers.slice(0, 3),
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
        offers: sortOffers(filterByCity(state.allOffers, state.city), action.payload),
      };
    }
    case ActionType.SELECT_OFFER: {
      return {
        ...state,
        selectedOffer: action.payload,
        isDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};


export default appInterfaceReducer;
