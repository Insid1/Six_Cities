import {ActionType} from "../action";
import {mapToCityLocation} from "../../const";
import {reviews} from "../../mocks/reviews";
import {capitalize} from "../../util.js/common";

const initialState = {
  allOffers: [],
  nearOffers: [],
  reviews,
  cities: Object.keys(mapToCityLocation),
};

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
};


const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        allOffers: action.payload,
        offers: filterByCity(action.payload, state.city),
        isDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
