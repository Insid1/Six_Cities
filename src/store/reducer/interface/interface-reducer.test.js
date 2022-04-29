import {ActionType} from "./action";
import interfaceReducer from "./interface-reducer";

const initialState = {
  city: `PARIS`,
  activeOffer: null,
  sortingType: `POPULAR`,
  selectedOffer: {},
  isSelectedOfferLoaded: false,
};

describe(`interface reducer works correctly`, () => {
  it(`reducer works correctly with given empty parameters`, () => {
    expect(interfaceReducer(undefined, {})).toEqual(initialState);
  });

  describe(`reducer works correctly with given custom action creators parameters`, () => {
    it(`reducer works correctly with given custom action type as IS_SELECTED_OFFER_LOADED`, () => {
      expect(interfaceReducer(initialState, {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: true,
      })).toEqual({
        ...initialState,
        isSelectedOfferLoaded: true,
      });

    });
    it(`reducer works correctly with given custom action type as SELECT_OFFER`, () => {
      expect(interfaceReducer(initialState, {
        type: ActionType.SELECT_OFFER,
        payload: {key: `value`},
      })).toEqual({
        ...initialState,
        selectedOffer: {key: `value`},
      });
    });
    it(`reducer works correctly with given custom action type as SET_ACTIVE_OFFER`, () => {
      expect(interfaceReducer(initialState, {
        type: ActionType.SET_ACTIVE_OFFER,
        payload: {key: `value`},
      })).toEqual({
        ...initialState,
        activeOffer: {key: `value`},
      });
    });
    it(`reducer works correctly with given custom action type as SET_CITY`, () => {
      expect(interfaceReducer(initialState, {
        type: ActionType.SET_CITY,
        payload: `someCity`,
      })).toEqual({
        ...initialState,
        city: `someCity`,
      });
    });
    it(`reducer works correctly with given custom action type as SET_CITY`, () => {
      expect(interfaceReducer(initialState, {
        type: ActionType.SET_SORTING_TYPE,
        payload: `someSortingType`,
      })).toEqual({
        ...initialState,
        sortingType: `someSortingType`,
      });
    });
  });
});
