import {ActionType, loadOffers, setIsOffersLoaded} from "./action";
import offersReducer from "./offers-reducer";

const initialState = {
  allOffers: [],
  isOffersLoaded: false,
  cities: [`PARIS`,
    `COLOGNE`,
    `BRUSSELS`,
    `AMSTERDAM`,
    `HAMBURG`,
    `DUSSELDORF`],
};

describe(`offers reducer works correctly`, () => {

  it(`reducer initialization with not given parametrs gives correct initial state`, () => {
    expect(offersReducer(undefined, {})).toEqual(initialState);
  });

  describe(`reducer with action loadOffers works correctly`, () => {
    it(`reducer with custom action with not empty array works correctly`, () => {
      expect(offersReducer(initialState, {
        type: ActionType.LOAD_OFFERS,
        payload: [1, 2, 3, 4, 5],
      })).toEqual({
        ...initialState,
        allOffers: [1, 2, 3, 4, 5],
      });
    });
    it(`reducer with custom action with empty array works correctly`, () => {
      expect(offersReducer({
        ...initialState,
        allOffers: [1, 2, 3, 4]
      }, {
        type: ActionType.LOAD_OFFERS,
        payload: [],
      })).toEqual({
        ...initialState,
        allOffers: [],
      });
    });
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(offersReducer(initialState, {
      type: ActionType.SET_IS_OFFERS_LOADED,
      payload: true,
    })).toEqual({
      ...initialState,
      isOffersLoaded: true,
    });
  });
  it(`reducer with custom action with unknown parametrs works correctly`, () => {
    expect(offersReducer(initialState, {
      type: `unknown type`,
      payload: true,
    })).toEqual(initialState);
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(offersReducer(initialState, {
      type: ActionType.SET_IS_OFFERS_LOADED,
      payload: false,
    })).toEqual({
      ...initialState,
      isOffersLoaded: false,
    });
  });
  describe(`reducer with action creator loadOffers works correctly`, () => {
    it(`reducer with action creator loadOffers with empty array works correctly`, () => {
      expect(offersReducer(initialState, loadOffers([]))).toEqual({
        ...initialState,
        allOffers: [],
      });
    });
    it(`reducer with action creator loadOffers with not empty array works correctly`, () => {
      expect(offersReducer(initialState, loadOffers([1, 2, 3, 4, 5]))).toEqual({
        ...initialState,
        allOffers: [1, 2, 3, 4, 5],
      });
    });
  });
  describe(`reducer with action loadOffers works correctly`, () => {
    it(`reducer with action creator setIsOffersLoaded with false works correctly`, () => {
      expect(offersReducer(initialState, setIsOffersLoaded(false))).toEqual({
        ...initialState,
        isOffersLoaded: false,
      });
    });
    it(`reducer with action creator setIsOffersLoaded with true works correctly`, () => {
      expect(offersReducer(initialState, setIsOffersLoaded(true))).toEqual({
        ...initialState,
        isOffersLoaded: true,
      });
    });
  });
});
