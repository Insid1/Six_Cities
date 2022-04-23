import {ActionType} from "../action";
import {createReducer} from "@reduxjs/toolkit";


const initialState = {
  city: `PARIS`,
  activeOffer: null,
  sortingType: `POPULAR`,
  isDataLoaded: false,
  selectedOffer: null,
};


const interfaceReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_LOADER, (state, action) => {
    state.isDataLoaded = !action.payload;
  });

  builder.addCase(ActionType.SET_CITY, (state, action) => {
    state.city = action.payload;
  });

  builder.addCase(ActionType.SET_ACTIVE_OFFER, (state, action) => {
    state.activeOffer = action.payload;
  });

  builder.addCase(ActionType.SET_SORTING_TYPE, (state, action) => {
    state.sortingType = action.payload;
  });

  builder.addCase(ActionType.SELECT_OFFER, (state, action) => {
    state.selectedOffer = action.payload;
  });
});

export default interfaceReducer;
