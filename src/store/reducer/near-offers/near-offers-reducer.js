import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  nearOffers: [],
  isNearOffersLoaded: false,
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const nearOfferReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_NEAR_OFFERS, (state, action) => {
    state.nearOffers = action.payload;
  });

  builder.addCase(ActionType.IS_NEAR_OFFERS_LOADED, (state, action) => {
    state.isNearOffersLoaded = action.payload;
  });
});


export default nearOfferReducer;
