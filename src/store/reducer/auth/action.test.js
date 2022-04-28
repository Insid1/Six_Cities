import {ActionType} from "./action";
import {setUserEmail, requireAuthorization} from "./action";

describe(`action creators work correctly`, () => {
  it(`action creator setUserEmail works correctly with givenData`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_EMAIL,
      payload: `someEm@ail`
    };
    expect(setUserEmail(`someEm@ail`)).toEqual(expectedAction);
  });
  it(`action creator requireAuthorization works correctly with givenData`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    };
    expect(requireAuthorization(`AUTH`)).toEqual(expectedAction);
  });
});
