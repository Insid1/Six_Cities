import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app';
import {offersAmsterdam} from './mock/mocks';


ReactDOM.render(
    <App
      offers={offersAmsterdam}
    />,
    document.querySelector(`#root`)
);


