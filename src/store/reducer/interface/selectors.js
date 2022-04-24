const selectPageType = (state) =>state.INTERFACE.pageType;

const selectCity = (state) => state.INTERFACE.city;

const selectDataLoadedStatus = (state) => state.INTERFACE.isDataLoaded;

const selectSortingType = (state) => state.INTERFACE.sortingType;

const selectActiveOffer = (state) => state.INTERFACE.activeOffer;

const selectSelectedOffer = (state) => state.INTERFACE.selectedOffer;

export {selectPageType, selectCity, selectDataLoadedStatus, selectSortingType, selectActiveOffer, selectSelectedOffer};
