const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

const ActionCreator = {
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
  })
};

export {ActionType, ActionCreator};
