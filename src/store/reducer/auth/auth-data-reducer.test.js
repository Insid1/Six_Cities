import {ActionType, requireAuthorization, setUserEmail} from "./action";
import authDataReducer from "./auth-data-reducer";

const initialState = {
  userEmail: ``,
  authorizationStatus: `NO_AUTH`,
};

describe(`auth-data reducer works correctly with given data`, () => {
  it(`reducer works correctly with given unknown data`, () => {
    expect(authDataReducer(undefined, {})).toEqual(initialState);
  });
  describe(`reducer works correctly with custom actions`, () => {
    it(`reducer works correctly with actionType REQUIRED_AUTHORIZATION`, () => {
      expect(authDataReducer(undefined, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: `AUTH`
      })).toEqual({
        ...initialState,
        authorizationStatus: `AUTH`,
      });
    });
    it(`reducer works correctly with actionType SET_USER_EMAIL`, () => {
      expect(authDataReducer(undefined, {
        type: ActionType.SET_USER_EMAIL,
        payload: `some@email.io`
      })).toEqual({
        ...initialState,
        userEmail: `some@email.io`,
      });
    });
    it(`reducer works correctly with actionType SET_USER_EMAIL`, () => {
      expect(authDataReducer(undefined, {
        type: `someAction`,
        payload: true
      })).toEqual(initialState);
    });
  });
  describe(`reducer works correctly with existing actions`, () => {
    it(`reducer works correctly with actionCreator setUserEmail`, () => {
      expect(authDataReducer(initialState, setUserEmail(`someEmail`))).toEqual({
        ...initialState,
        userEmail: `someEmail`,
      });
    });
    it(`reducer works correctly with actionCreator requireAuthorization`, () => {
      expect(authDataReducer(initialState, requireAuthorization(`AUTH`))).toEqual({
        ...initialState,
        authorizationStatus: `AUTH`,
      });
    });
  });
});


