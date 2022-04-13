import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app';
import {offersAmsterdam} from './mocks/offers';
import {reviews} from './mocks/reviews';


ReactDOM.render(
    <React.StrictMode>
      <App
        offers={offersAmsterdam}
        reviews={reviews}
      />
    </React.StrictMode>,
    document.querySelector(`#root`)
);


