import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_IS_OFFERS_LOADED: `SET_IS_OFFERS_LOADED`,
};


const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const setIsOffersLoaded = createAction(ActionType.SET_IS_OFFERS_LOADED, (bool) => ({
  payload: bool,
}));

export {ActionType, loadOffers, setIsOffersLoaded};
