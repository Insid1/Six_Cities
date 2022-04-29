import {ActionType, loadNearOffers, setIsNearOffersLoaded} from "./action";
import nearOfferReducer from "./near-offers-reducer";

const initialState = {
  nearOffers: [],
  isNearOffersLoaded: false,
};

describe(`near-offers reducer works correctly`, () => {

  it(`reducer initialization with not given parametrs gives correct initial state`, () => {
    expect(nearOfferReducer(undefined, {})).toEqual(initialState);
  });

  describe(`reducer with action loadNearOffers works correctly`, () => {
    it(`reducer with custom action with not empty array works correctly`, () => {
      expect(nearOfferReducer(initialState, {
        type: ActionType.LOAD_NEAR_OFFERS,
        payload: [1, 2, 3, 4, 5],
      })).toEqual({
        ...initialState,
        nearOffers: [1, 2, 3, 4, 5],
      });
    });
    it(`reducer with custom action with empty array works correctly`, () => {
      expect(nearOfferReducer({
        ...initialState,
        nearOffers: [1, 2, 3, 4]
      }, {
        type: ActionType.LOAD_NEAR_OFFERS,
        payload: [],
      })).toEqual({
        ...initialState,
        nearOffers: [],
      });
    });
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(nearOfferReducer(initialState, {
      type: ActionType.IS_NEAR_OFFERS_LOADED,
      payload: true,
    })).toEqual({
      ...initialState,
      isNearOffersLoaded: true,
    });
  });
  it(`reducer with custom action with unknown parametrs works correctly`, () => {
    expect(nearOfferReducer(initialState, {
      type: `unknown type`,
      payload: true,
    })).toEqual(initialState);
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(nearOfferReducer(initialState, {
      type: ActionType.IS_NEAR_OFFERS_LOADED,
      payload: false,
    })).toEqual({
      ...initialState,
      isNearOffersLoaded: false,
    });
  });
  describe(`reducer with action creator loadNearOffers works correctly`, () => {
    it(`reducer with action creator loadNearOffers with empty array works correctly`, () => {
      expect(nearOfferReducer(initialState, loadNearOffers([]))).toEqual({
        ...initialState,
        nearOffers: [],
      });
    });
    it(`reducer with action creator loadNearOffers with not empty array works correctly`, () => {
      expect(nearOfferReducer(initialState, loadNearOffers([1, 2, 3, 4, 5]))).toEqual({
        ...initialState,
        nearOffers: [1, 2, 3, 4, 5],
      });
    });
  });
  describe(`reducer with action setIsNearOffersLoaded works correctly`, () => {
    it(`reducer with action creator setIsNearOffersLoaded with false works correctly`, () => {
      expect(nearOfferReducer(initialState, setIsNearOffersLoaded(false))).toEqual({
        ...initialState,
        isNearOffersLoaded: false,
      });
    });
    it(`reducer with action creator setIsNearOffersLoaded with true works correctly`, () => {
      expect(nearOfferReducer(initialState, setIsNearOffersLoaded(true))).toEqual({
        ...initialState,
        isNearOffersLoaded: true,
      });
    });
  });
});
