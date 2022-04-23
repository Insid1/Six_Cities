import {ActionType} from "../action";
import {createReducer} from "@reduxjs/toolkit";
import {mapToCityLocation} from "../../const";
import {reviews} from "../../mocks/reviews";

const initialState = {
  offers: [],
  allOffers: [],
  nearOffers: [],
  reviews,
  cities: Object.keys(mapToCityLocation),
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const dataReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.allOffers = action.payload;
  });

  builder.addCase(ActionType.FILL_OFFERS, (state, action) => {
    state.offers = action.payload;
  });

});


export default dataReducer;
