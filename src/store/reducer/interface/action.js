import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  SET_PAGE_TYPE: `SET_PAGE_TYPE`,
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  SET_LOADER: `SET_LOADER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SELECT_OFFER: `SELECT_OFFER`
};

const setPageType = createAction(ActionType.SET_PAGE_TYPE, (type) => ({
  payload: type,
}));

const setCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));

const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (offerId) => ({
  payload: offerId,
}));

const setSortingType = createAction(ActionType.SET_SORTING_TYPE, (sortingType) => ({
  payload: sortingType,
}));

const setLoader = createAction(ActionType.SET_LOADER, (bool) => ({
  payload: bool,
}));

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const selectOffer = createAction(ActionType.SELECT_OFFER, (offer) => ({
  payload: offer,
}));

export {ActionType, setCity, setActiveOffer, setSortingType, setLoader, redirectToRoute, selectOffer, setPageType};
