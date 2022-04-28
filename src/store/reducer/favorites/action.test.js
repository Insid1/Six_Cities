import {ActionType} from "./action";
import {loadFavoriteOffers, setIsFavoriteOffersLoaded} from "./action";


describe(`action creators work correctly`, () => {
  describe(`action creator setIsFavoriteOffersLoaded works correctly`, () => {
    it(`action creator for setIsFavoriteOffersLoaded works correctly with given true`, () => {
      const expectedAction = {
        type: ActionType.IS_FAVORITE_OFFERS_LOADED,
        payload: true,
      };
      expect(setIsFavoriteOffersLoaded(true)).toEqual(expectedAction);
    });
    it(`action creator for setIsFavoriteOffersLoaded works correctly with given false`, () => {
      const expectedAction = {
        type: ActionType.IS_FAVORITE_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsFavoriteOffersLoaded(false)).toEqual(expectedAction);
    });
    it(`action creator forset setIsFavoriteOffersLoaded works correctly with given undefined`, () => {
      const expectedAction = {
        type: ActionType.IS_FAVORITE_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsFavoriteOffersLoaded(undefined)).toEqual(expectedAction);
    });
    it(`action creator for setIsFavoriteOffersLoaded works correctly with given null`, () => {
      const expectedAction = {
        type: ActionType.IS_FAVORITE_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsFavoriteOffersLoaded(null)).toEqual(expectedAction);
    });
    it(`action creator for setIsFavoriteOffersLoaded works correctly with no argument`, () => {
      const expectedAction = {
        type: ActionType.IS_FAVORITE_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsFavoriteOffersLoaded()).toEqual(expectedAction);
    });
  });

  describe(`action creator loadFavoriteOffers works correctly`, () => {
    it(`action creator loadFavoriteOffers with empty array works correctly`, () => {
      const expectedAction = {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [],
      };
      expect(loadFavoriteOffers([])).toEqual(expectedAction);
    });
    it(`action creator loadFavoriteOffers with not empty array works correctly`, () => {
      const expectedAction = {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [1, 2, 3, 4, 5, 6],
      };
      expect(loadFavoriteOffers([1, 2, 3, 4, 5, 6])).toEqual(expectedAction);
    });
  });
});


