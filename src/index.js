import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app';
import {offersAmsterdam} from './mocks/offers';
import {reviews} from './mocks/reviews';

const nearOffers = offersAmsterdam.slice(0, 3);

ReactDOM.render(
    <React.StrictMode>
      <App
        offers={offersAmsterdam}
        nearOffers={nearOffers}
        reviews={reviews}
      />
    </React.StrictMode>,
    document.querySelector(`#root`)
);


