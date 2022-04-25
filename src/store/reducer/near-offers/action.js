import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
};


const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (nearOffers) => ({
  payload: nearOffers,
}));


export {ActionType, loadNearOffers};
