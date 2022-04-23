const getPageType = (state) =>state.INTERFACE.pageType;

const getCity = (state) => state.INTERFACE.city;

const getDataLoadedStatus = (state) => state.INTERFACE.isDataLoaded;

const getSortingType = (state) => state.INTERFACE.sortingType;

const getActiveOffer = (state) => state.INTERFACE.activeOffer;

const getSelectedOffer = (state) => state.INTERFACE.selectedOffer;

export {getPageType, getCity, getDataLoadedStatus, getSortingType, getActiveOffer, getSelectedOffer};
