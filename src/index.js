import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app';
import {offersAmsterdam} from './mocks/offers';


ReactDOM.render(
    <React.StrictMode>
      <App
        offers={offersAmsterdam}
      />
    </React.StrictMode>,
    document.querySelector(`#root`)
);


