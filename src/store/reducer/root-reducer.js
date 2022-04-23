import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import authDataReducer from "./auth-data-reducer";
import interfaceReducer from "./interface-reducer";

const ReducerName = {
  DATA: `DATA`,
  INTERFACE: `INTERFACE`,
  AUTH_DATA: `AUTH_DATA`,
};

const rootReducer = combineReducers({
  [ReducerName.DATA]: dataReducer,
  [ReducerName.INTERFACE]: interfaceReducer,
  [ReducerName.AUTH_DATA]: authDataReducer,
});

export default rootReducer;

