import {ActionType, redirectToRoute, selectOffer, setActiveOffer, setCity, setIsSelectedOfferLoaded, setSortingType} from "./action";

describe(`action creators work correctly`, () => {
  it(`action creator setCity works correctly with given data`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: `paris`
    };
    expect(setCity(`paris`)).toEqual(expectedAction);
  });
  describe(`action creator setActive offers works correctly`, () => {
    it(`action creator setActiveOffer works correctly with given string`, () => {
      const expectedAction = {
        type: ActionType.SET_ACTIVE_OFFER,
        payload: 1
      };
      expect(setActiveOffer(`1`)).toEqual(expectedAction);
    });
    it(`action creator setActiveOffer works correctly with given number`, () => {
      const expectedAction = {
        type: ActionType.SET_ACTIVE_OFFER,
        payload: 1
      };
      expect(setActiveOffer(1)).toEqual(expectedAction);
    });
    it(`action creator setActiveOffer works correctly with given not data`, () => {
      const expectedAction = {
        type: ActionType.SET_ACTIVE_OFFER,
        payload: NaN
      };
      expect(setActiveOffer()).toEqual(expectedAction);
    });
    it(`action creator setActiveOffer works correctly with given not empty string`, () => {
      const expectedAction = {
        type: ActionType.SET_ACTIVE_OFFER,
        payload: NaN
      };
      expect(setActiveOffer(`hello`)).toEqual(expectedAction);
    });
  });
  it(`action creator setSortingType works correctly with given data`, () => {
    const expectedAction = {
      type: ActionType.SET_SORTING_TYPE,
      payload: `high-to-low`
    };
    expect(setSortingType(`high-to-low`)).toEqual(expectedAction);
  });
  it(`action creator redirectToRoute works correctly with given data`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `some route`
    };
    expect(redirectToRoute(`some route`)).toEqual(expectedAction);
  });

  describe(`action creator selectOffer works correctly with given data`, () => {
    it(`action creator selectOffer works correctly with empty array`, () => {
      const expectedAction = {
        type: ActionType.SELECT_OFFER,
        payload: [],
      };
      expect(selectOffer([])).toEqual(expectedAction);
    });
    it(`action creator selectOffer works correctly with not empty array`, () => {
      const expectedAction = {
        type: ActionType.SELECT_OFFER,
        payload: [1, 2, 3, 4, 5],
      };
      expect(selectOffer([1, 2, 3, 4, 5])).toEqual(expectedAction);
    });
  });

  describe(`action creator setIsSelectedOfferLoaded works correctly`, () => {
    it(`action creator for setIsSelectedOfferLoaded works correctly with given true`, () => {
      const expectedAction = {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: true,
      };
      expect(setIsSelectedOfferLoaded(true)).toEqual(expectedAction);
    });
    it(`action creator for setIsSelectedOfferLoaded works correctly with given false`, () => {
      const expectedAction = {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: false,
      };
      expect(setIsSelectedOfferLoaded(false)).toEqual(expectedAction);
    });
    it(`action creator forset setIsSelectedOfferLoaded works correctly with given undefined`, () => {
      const expectedAction = {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: false,
      };
      expect(setIsSelectedOfferLoaded(undefined)).toEqual(expectedAction);
    });
    it(`action creator for setIsSelectedOfferLoaded works correctly with given null`, () => {
      const expectedAction = {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: false,
      };
      expect(setIsSelectedOfferLoaded(null)).toEqual(expectedAction);
    });
    it(`action creator for setIsSelectedOfferLoaded works correctly with no argument`, () => {
      const expectedAction = {
        type: ActionType.IS_SELECTED_OFFER_LOADED,
        payload: false,
      };
      expect(setIsSelectedOfferLoaded()).toEqual(expectedAction);
    });
  });
});
