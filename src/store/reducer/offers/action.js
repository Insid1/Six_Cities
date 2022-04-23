import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  FILL_OFFERS: `FILL_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};


const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const fillOffers = createAction(ActionType.FILL_OFFERS, (offers) => ({
  payload: offers,
}));


export {ActionType, loadOffers, fillOffers};
