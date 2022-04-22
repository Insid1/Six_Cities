const ActionType = {
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

const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

const fillOffers = (city) => ({
  type: ActionType.FILL_OFFERS,
  payload: city,
});

const setCity = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

const setActiveOffer = (offerId) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: offerId,
});

const setSortingType = (sortingType) => ({
  type: ActionType.SET_SORTING_TYPE,
  payload: sortingType,
});

const setUserEmail = (email) => ({
  type: ActionType.SET_USER_EMAIL,
  payload: email,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const setLoader = (bool) => ({
  type: ActionType.SET_LOADER,
  payload: bool,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const selectOffer = (offer) => ({
  type: ActionType.SELECT_OFFER,
  payload: offer,
});

export {ActionType, loadOffers, fillOffers, setCity, setActiveOffer, setSortingType, setUserEmail, requireAuthorization, setLoader, redirectToRoute, selectOffer};
