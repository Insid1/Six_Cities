import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";


const initialState = {
  userEmail: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const authDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.SET_USER_EMAIL: {
      return {
        ...state,
        userEmail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authDataReducer;
