const selectAllOffers = (state) => state.OFFERS.allOffers;

// const selectCurrentOffers = (state) => state.OFFERS.offers;

const selectIsOffersLoaded = (state) => state.OFFERS.isOffersLoaded;

const selectCities = (state) => state.OFFERS.cities;

// const selectCurrOffersLength = (state) => state.OFFERS.offers.length;

export {selectAllOffers, selectCities, selectIsOffersLoaded};
