import {selectCity} from "@reducer/interface/selectors";
import {createSelector} from "@reduxjs/toolkit";
import {filterByCity} from "@util/filter";
const selectAllOffers = (state) => state.OFFERS.allOffers;

const selectCurrentOffers = (state) => state.OFFERS.offers;

const selectCities = (state) => state.OFFERS.cities;

const selectCurrOffersLength = (state) => state.OFFERS.offers.length;

const selectFilteredOffers = createSelector([selectAllOffers, selectCity], ((allOffers, city) => {
  return filterByCity(allOffers, city);
}));

export {selectAllOffers, selectCurrentOffers, selectCities, selectCurrOffersLength, selectFilteredOffers};
