import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};


const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));


export {ActionType, loadOffers};
