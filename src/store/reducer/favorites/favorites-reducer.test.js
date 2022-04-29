import {ActionType, loadFavoriteOffers, setIsFavoriteOffersLoaded} from "./action";
import favoritesReducer from "./favorites-reducer";

const initialState = {
  favoriteOffers: {},
  isFavoriteOffersLoaded: false,
};

describe(`favorites reducer works correctly`, () => {

  it(`reducer initialization with not given parameters gives correct initial state`, () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  describe(`reducer with action loadFAvoritesOffers works correctly`, () => {
    it(`reducer with custom action with not empty array works correctly`, () => {
      expect(favoritesReducer(initialState, {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [1, 2, 3, 4, 5],
      })).toEqual({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4, 5],
      });
    });
    it(`reducer with custom action with empty array works correctly`, () => {
      expect(favoritesReducer({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4]
      }, {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [],
      })).toEqual({
        ...initialState,
        favoriteOffers: [],
      });
    });
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: ActionType.IS_FAVORITE_OFFERS_LOADED,
      payload: true,
    })).toEqual({
      ...initialState,
      isFavoriteOffersLoaded: true,
    });
  });
  it(`reducer with custom action with unknown parameters works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: `unknown type`,
      payload: true,
    })).toEqual(initialState);
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: ActionType.IS_FAVORITE_OFFERS_LOADED,
      payload: false,
    })).toEqual({
      ...initialState,
      isFavoriteOffersLoaded: false,
    });
  });
  describe(`reducer with action creator loadFavoriteOffers works correctly`, () => {
    it(`reducer with action creator loadFavoriteOffers with empty array works correctly`, () => {
      expect(favoritesReducer(initialState, loadFavoriteOffers([]))).toEqual({
        ...initialState,
        favoriteOffers: [],
      });
    });
    it(`reducer with action creator loadFavoriteOffers with not empty array works correctly`, () => {
      expect(favoritesReducer(initialState, loadFavoriteOffers([1, 2, 3, 4, 5]))).toEqual({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4, 5],
      });
    });
  });
  describe(`reducer with action setIsFavoriteOffersLoaded works correctly`, () => {
    it(`reducer with action creator setIsFavoriteOffersLoaded with false works correctly`, () => {
      expect(favoritesReducer(initialState, setIsFavoriteOffersLoaded(false))).toEqual({
        ...initialState,
        isFavoriteOffersLoaded: false,
      });
    });
    it(`reducer with action creator setIsFavoriteOffersLoaded with true works correctly`, () => {
      expect(favoritesReducer(initialState, setIsFavoriteOffersLoaded(true))).toEqual({
        ...initialState,
        isFavoriteOffersLoaded: true,
      });
    });
  });
});
