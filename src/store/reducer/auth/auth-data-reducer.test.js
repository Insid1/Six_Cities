import {ActionType, requireAuthorization, setUserEmail} from "./action";
import authDataReducer from "./auth-data-reducer";
import MockAdapter from 'axios-mock-adapter';
import {ServerRoute} from "@src/const";
import {createApi} from "@api/api";
import {logout, login, checkAuthorization} from "./api-actions";

const initialState = {
  userEmail: ``,
  authorizationStatus: `NO_AUTH`,
};

const api = createApi();

// sync
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
// async

describe(`async operation works correctly`, () => {
  it(`should make correct API call to /logout`, () => {
    // Mock the api with axios api mock
    const apiMock = new MockAdapter(api);
    // Mock dispatch function
    const dispatch = jest.fn();
    // extract tested function so we will be able to assign
    // custom mocked 'dispatch' 'state' and 'api'
    const logoutLoader = logout();

    apiMock
      .onGet(ServerRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(()=> {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_EMAIL,
          payload: ``,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `NO_AUTH`,
        });
      });

  });

  it(`should make correct API call to /login`, () => {
    // Mock the api with axios api mock
    const apiMock = new MockAdapter(api);
    // Mock dispatch function
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const dispatch = jest.fn();
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ServerRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_EMAIL,
          payload: `test@test.ru`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `REDIRECT_TO_ROUTE`,
          payload: `/`,
        });
      });
  });

  it(`should make correct API call to /login to ask authorization`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorizationLoader = checkAuthorization();

    apiMock
      .onGet(ServerRoute.LOGIN)
      .reply(200, {email: `test@test.io`});
    // .reply(200, [{fake: true}]);

    return checkAuthorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_EMAIL,
          payload: `test@test.io`,
        });
      });
  });

});
