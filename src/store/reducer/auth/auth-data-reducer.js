import {AuthorizationStatus} from "../../../const";
import {ActionType} from "./action";
import {createReducer} from "@reduxjs/toolkit";


const initialState = {
  userEmail: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};


const authDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(ActionType.SET_USER_EMAIL, (state, action) => {
    state.userEmail = action.payload;
  });
});


export default authDataReducer;
