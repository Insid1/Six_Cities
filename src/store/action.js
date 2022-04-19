const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  FILL_OFFERS: `FILL_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_EMAIL: `SET_USER_EMAIL`,
  SET_LOADER: `SET_LOADER`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  fillOffers: (city) => ({
    type: ActionType.FILL_OFFERS,
    payload: city,
  }),
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setActiveOffer: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offerId,
  }),
  setSortingType: (sortingType) => ({
    type: ActionType.SET_SORTING_TYPE,
    payload: sortingType,
  }),
  setUserEmail: (email) => ({
    type: ActionType.SET_USER_EMAIL,
    payload: email,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setLoader: () => ({
    type: ActionType.SET_LOADER,
  }),
};

export {ActionType, ActionCreator};
