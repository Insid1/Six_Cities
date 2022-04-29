import {selectCity, selectSortingType} from "@reducer/interface/selectors";
import {createSelector} from "@reduxjs/toolkit";
import {filterByCity} from "@util/filter";
import {sortOffers} from "@util/sort";

const selectAllOffers = (state) => state.OFFERS.allOffers;

const selectIsOffersLoaded = (state) => state.OFFERS.isOffersLoaded;

const selectCities = (state) => state.OFFERS.cities;


const selectFilteredOffers = createSelector(
    [selectAllOffers, selectCity],
    ((allOffers, city) => {
      return filterByCity(allOffers, city);
    }));

const selectSortedOffers = createSelector(
    [selectFilteredOffers, selectSortingType],
    (filteredOffers, sortType) => {
      return sortOffers(filteredOffers, sortType);
    });

export {selectFilteredOffers, selectSortedOffers};

export {selectAllOffers, selectCities, selectIsOffersLoaded};
