import React from "react";
import ReactDOM from "react-dom";
import {createApi} from "./api/api";
import {Provider} from "react-redux";
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from "./store/reducer/root-reducer";
import {fetchOfferList, checkAuthorization} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      redirect,
    })
});

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
