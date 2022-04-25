import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";
import {mapToCityLocation} from "../../../const";

const initialState = {
  allOffers: [],
  isOffersLoaded: false,
  cities: Object.keys(mapToCityLocation),
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const offersReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.allOffers = action.payload;
  });

  builder.addCase(ActionType.SET_IS_OFFERS_LOADED, (state, action) => {
    state.isOffersLoaded = action.payload;
  });

});


export default offersReducer;
