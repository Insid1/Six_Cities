import {createSelector} from "@reduxjs/toolkit";
import {selectAllOffers} from "./offers/selectors";
import {selectCity} from "./interface/selectors";
import {filterByCity} from "@util/filter";


const selectFilteredOffers = createSelector([selectAllOffers, selectCity], ((allOffers, city) => {
  return filterByCity(allOffers, city);
}));

export {selectFilteredOffers};
