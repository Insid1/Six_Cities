import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  nearOffers: [],
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const nearOfferReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_NEAR_OFFERS, (state, action) => {
    state.nearOffers = action.payload;
  });
});


export default nearOfferReducer;
