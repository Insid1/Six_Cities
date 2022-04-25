const selectCity = (state) => state.INTERFACE.city;

const selectSortingType = (state) => state.INTERFACE.sortingType;

const selectActiveOffer = (state) => state.INTERFACE.activeOffer;

const selectSelectedOffer = (state) => state.INTERFACE.selectedOffer;

const selectIsSelectedOfferLoaded = (state) => state.INTERFACE.isSelectedOfferLoaded;

export {selectCity, selectSortingType, selectActiveOffer, selectSelectedOffer, selectIsSelectedOfferLoaded};
