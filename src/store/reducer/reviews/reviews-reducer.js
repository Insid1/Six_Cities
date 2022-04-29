import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  reviews: []
};


// Под капотом RTK есть библеотека immer, которая отвечает за имутабельность, следовательно копировать изначальный state ненужно
const reviewsReducer = createReducer(initialState, (builder) => {

  builder.addCase(ActionType.LOAD_REVIEWS, (state, action) => {
    state.reviews = action.payload;
  });
});

export {initialState};
export default reviewsReducer;
