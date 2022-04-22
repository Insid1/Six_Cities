import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {createApi} from "./api/api";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import App from './components/app/app';
// import {reducer} from "./store/reducer/reducer";
import rootReducer from "./store/reducer/root-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchOfferList, checkAuthorization} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";

const api = createApi();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
));

store.dispatch(fetchOfferList());
store.dispatch(checkAuthorization());


ReactDOM.render(
    <React.StrictMode>
      <Provider
        store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.querySelector(`#root`)
);
