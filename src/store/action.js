import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  SET_PAGE_TYPE: `SET_PAGE_TYPE`,
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  FILL_OFFERS: `FILL_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_EMAIL: `SET_USER_EMAIL`,
  SET_LOADER: `SET_LOADER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SELECT_OFFER: `SELECT_OFFER`
};

const setPageType = createAction(ActionType.SET_PAGE_TYPE, (type) => ({
  payload: type,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const fillOffers = createAction(ActionType.FILL_OFFERS, (offers) => ({
  payload: offers,
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

const setUserEmail = createAction(ActionType.SET_USER_EMAIL, (email) => ({
  payload: email,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
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

export {ActionType, loadOffers, fillOffers, setCity, setActiveOffer, setSortingType, setUserEmail, requireAuthorization, setLoader, redirectToRoute, selectOffer, setPageType};
