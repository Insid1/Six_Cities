const selectAllOffers = (state) => state.OFFERS.allOffers;

const selectIsOffersLoaded = (state) => state.OFFERS.isOffersLoaded;

const selectCities = (state) => state.OFFERS.cities;

export {selectAllOffers, selectCities, selectIsOffersLoaded};
