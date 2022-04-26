import {browserHistory} from "@src/browser-history/browser-history";
import {ServerRoute} from "@src/const";


const onUnauthorized = () => {
  browserHistory.push(`..${ServerRoute.LOGIN}`);
};


export {onUnauthorized};
