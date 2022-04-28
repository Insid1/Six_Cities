import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  IS_NEAR_OFFERS_LOADED: `IS_NEAR_OFFERS_LOADED`,
};


const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (nearOffers) => ({
  payload: nearOffers,
}));

const setIsNearOffersLoaded = createAction(ActionType.IS_NEAR_OFFERS_LOADED, (bool) => ({
  payload: Boolean(bool),
}));


export {ActionType, loadNearOffers, setIsNearOffersLoaded};
