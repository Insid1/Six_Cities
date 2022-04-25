import {browserHistory} from "@src/browser-history/browser-history";
import {ActionType} from "../reducer/interface/action";


const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};


export {redirect};
