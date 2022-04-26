import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  favoriteOffers: {},
  isFavoriteOffersLoaded: false,
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const FavoritesReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_FAVORITE_OFFERS, (state, action) => {
    state.favoriteOffers = action.payload;
  });

  builder.addCase(ActionType.IS_FAVORITE_OFFERS_LOADED, (state, action) => {
    state.isFavoriteOffersLoaded = action.payload;
  });
});


export default FavoritesReducer;
