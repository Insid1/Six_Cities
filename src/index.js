import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {createApi} from "./api/api";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {fetchOfferList} from "./api/api-actions";
import App from './components/app/app';
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const api = createApi();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(fetchOfferList());

ReactDOM.render(
    <React.StrictMode>
      <Provider
        store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.querySelector(`#root`)
);
