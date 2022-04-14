import React, {useState} from "react";
import {offersType} from "../../prop-type";
import {reviewsType} from "../../prop-type";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main-page/main-page';
import SignIn from '../sign-in-page/sign-in-page';
import Favorites from '../favorites-page/favorites-page';
import Room from '../room-page/room-page';
import NotFound from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';
import {PageType} from "../../const";

const App = ({offers, reviews, nearOffers}) => {
  const [activeOffer, setActiveOffer] = useState(null);
  const handleMouseEnter = (id) => {
    setActiveOffer(id);
  };
  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    setActiveOffer(null);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main
            offers={offers}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            activeOffer={activeOffer}
            type={PageType.MAIN}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room
            reviews={reviews}
            nearOffers={nearOffers}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            activeOffer={activeOffer}
            type={PageType.ROOM}
          />
        </Route>
        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  nearOffers: offersType,
  offers: offersType,
  reviews: reviewsType,
};

export {App};
