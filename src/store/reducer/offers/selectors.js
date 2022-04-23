const getAllOffers = (state) => state.OFFERS.allOffers;

const getCurrentOffers = (state) => state.OFFERS.offers;

const getCities = (state) => state.OFFERS.cities;

const getCurrOffersLength = (state) => state.OFFERS.offers.length;

export {getAllOffers, getCurrentOffers, getCities, getCurrOffersLength};
