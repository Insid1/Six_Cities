const {loadReviews, ActionType} = require(`./action`);


describe(`Action creators work correctly`, () => {

  it(`action creator for loadReviews returns correct action`, () => {
    const extectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [1, 2, 3, 4, 5],
    };
    expect(loadReviews([1, 2, 3, 4, 5])).toEqual(extectedAction);
    expect(loadReviews([])).toEqual({...extectedAction, payload: []});
    expect(loadReviews([1])).toEqual({...extectedAction, payload: [1]});
  });
});
