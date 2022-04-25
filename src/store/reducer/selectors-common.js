import {createSelector} from "@reduxjs/toolkit";
import {selectAllOffers} from "./offers/selectors";
import {selectCity, selectSortingType} from "./interface/selectors";
import {filterByCity} from "@util/filter";
import {sortOffers} from "@util/sort";


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
