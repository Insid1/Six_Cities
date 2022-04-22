import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import authDataReducer from "./auth-data-reducer";

const ReducerName = {
  DATA: `DATA`,
  AUTH_DATA: `AUTH_DATA`,
};

const rootReducer = combineReducers({
  [ReducerName.DATA]: dataReducer,
  [ReducerName.AUTH_DATA]: authDataReducer,
});

export default rootReducer;

