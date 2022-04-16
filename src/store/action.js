const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_MAP: `SET_MAP`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  FILL_OFFERS: `FILL_OFFERS`,
};

const ActionCreator = {
  setMap: (map) => ({
    type: ActionType.SET_MAP,
    payload: map,
  }),
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setActiveOffer: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offerId,
  }),
  fillOffers: () => ({
    type: ActionType.FILL_OFFERS,
    // payload:
  }),
};

export {ActionType, ActionCreator};
