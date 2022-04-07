import React from "react";
import {offersType} from "../../prop-type";
import {MainPage} from '../main-page/main-page';

const App = ({offers}) => {
  return <MainPage
    offers={offers} />;
};

App.propTypes = {
  offers: offersType
};

export {App};
