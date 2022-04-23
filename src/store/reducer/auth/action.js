import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_EMAIL: `SET_USER_EMAIL`,
};


const setUserEmail = createAction(ActionType.SET_USER_EMAIL, (email) => ({
  payload: email,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));


export {ActionType, setUserEmail, requireAuthorization};
