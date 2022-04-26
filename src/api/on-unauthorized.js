import {browserHistory} from "@src/browser-history/browser-history";
const onUnauthorized = () => {
  browserHistory.push(`../login`);
};

export {onUnauthorized};
