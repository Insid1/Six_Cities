import {ActionType} from "../action";
import {createReducer} from "@reduxjs/toolkit";
import {mapToCityLocation} from "../../const";
import {reviews} from "../../mocks/reviews";
import {capitalize} from "../../util.js/common";
import {SortingType} from "../../const";

const initialState = {
  city: `PARIS`,
  offers: [],
  allOffers: [],
  activeOffer: null,
  nearOffers: [],
  reviews,
  cities: Object.keys(mapToCityLocation),
  sortingType: `POPULAR`,
  isDataLoaded: false,
  selectedOffer: null,
};

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
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

// Под капотом RTK есть библеотека imer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_LOADER, (state, action) => {
    state.isDataLoaded = !action.payload;
  });

  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.allOffers = action.payload;
    state.offers = filterByCity(action.payload, state.city);
  });

  builder.addCase(ActionType.FILL_OFFERS, (state, action) => {
    state.offers = filterByCity(state.allOffers, action.payload);
  });

  builder.addCase(ActionType.SET_CITY, (state, action) => {
    state.city = action.payload;
    state.offers = filterByCity(state.allOffers, action.payload);
    state.nearOffers = state.allOffers.slice(0, 3);
    state.sortingType = SortingType.POPULAR;
  });

  builder.addCase(ActionType.SET_ACTIVE_OFFER, (state, action) => {
    state.activeOffer = action.payload;
  });

  builder.addCase(ActionType.SET_SORTING_TYPE, (state, action) => {
    state.sortingType = action.payload;
    state.offers = sortOffers(filterByCity(state.allOffers, state.city), action.payload);
  });

  builder.addCase(ActionType.SELECT_OFFER, (state, action) => {
    state.selectedOffer = action.payload;
    state.isDataLoaded = true;

  });
});


export default dataReducer;
