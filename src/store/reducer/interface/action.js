import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SELECT_OFFER: `SELECT_OFFER`,
  IS_SELECTED_OFFER_LOADED: `IS_SELECTED_OFFER_LOADED`,
};

const setCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));

const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (offerId) => ({
  payload: +offerId,
}));

const setSortingType = createAction(ActionType.SET_SORTING_TYPE, (sortingType) => ({
  payload: sortingType,
}));

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const selectOffer = createAction(ActionType.SELECT_OFFER, (offer) => ({
  payload: offer,
}));

const setIsSelectedOfferLoaded = createAction(ActionType.IS_SELECTED_OFFER_LOADED, (bool) => ({
  payload: Boolean(bool),
}));

export {ActionType, setCity, setActiveOffer, setSortingType, redirectToRoute, selectOffer, setIsSelectedOfferLoaded};
