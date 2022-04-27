const selectFavoriteOffers = (state) => state.FAVORITES.favoriteOffers;

const selectIsFavoriteOffersLoaded = (state) => state.FAVORITES.isFavoriteOffersLoaded;

const selectIsNoFavoriteOffers = (state) => Object.keys(state.FAVORITES.favoriteOffers).length === 0;

export {selectFavoriteOffers, selectIsFavoriteOffersLoaded, selectIsNoFavoriteOffers};
