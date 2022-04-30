import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  IS_FAVORITE_OFFERS_LOADED: `IS_FAVORITE_OFFERS_LOADED`,
};


const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));

const setIsFavoriteOffersLoaded = createAction(ActionType.IS_FAVORITE_OFFERS_LOADED, (bool) => ({
  payload: Boolean(bool),
}));


export {ActionType, loadFavoriteOffers, setIsFavoriteOffersLoaded};
