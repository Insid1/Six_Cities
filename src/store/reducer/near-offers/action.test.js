import {ActionType} from "./action";
import {loadNearOffers, setIsNearOffersLoaded} from "./action";


describe(`action creators work correctly`, () => {
  describe(`action creator setIsNearOffersLoaded works correctly`, () => {
    it(`action creator for setIsNearOffersLoaded works correctly with given true`, () => {
      const expectedAction = {
        type: ActionType.IS_NEAR_OFFERS_LOADED,
        payload: true,
      };
      expect(setIsNearOffersLoaded(true)).toEqual(expectedAction);
    });
    it(`action creator for setIsNearOffersLoaded works correctly with given false`, () => {
      const expectedAction = {
        type: ActionType.IS_NEAR_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsNearOffersLoaded(false)).toEqual(expectedAction);
    });
    it(`action creator forset IsNearOffersLoaded works correctly with given undefined`, () => {
      const expectedAction = {
        type: ActionType.IS_NEAR_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsNearOffersLoaded(undefined)).toEqual(expectedAction);
    });
    it(`action creator for setIsNearOffersLoaded works correctly with given null`, () => {
      const expectedAction = {
        type: ActionType.IS_NEAR_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsNearOffersLoaded(null)).toEqual(expectedAction);
    });
    it(`action creator for setIsNearOffersLoaded works correctly with no argument`, () => {
      const expectedAction = {
        type: ActionType.IS_NEAR_OFFERS_LOADED,
        payload: false,
      };
      expect(setIsNearOffersLoaded()).toEqual(expectedAction);
    });
  });

  describe(`action creator loadNearOffers works correctly`, () => {
    it(`action creator loadNearOffers with empty array works correctly`, () => {
      const expectedAction = {
        type: ActionType.LOAD_NEAR_OFFERS,
        payload: [],
      };
      expect(loadNearOffers([])).toEqual(expectedAction);
    });
    it(`action creator loadNearOffers with not empty array works correctly`, () => {
      const expectedAction = {
        type: ActionType.LOAD_NEAR_OFFERS,
        payload: [1, 2, 3, 4, 5, 6],
      };
      expect(loadNearOffers([1, 2, 3, 4, 5, 6])).toEqual(expectedAction);
    });
  });
});

