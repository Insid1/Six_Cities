import React from "react";
import {offersType} from "../../prop-type";
import {reviewsType} from "../../prop-type";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main-page/main-page';
import SignIn from '../sign-in-page/sign-in-page';
import Favorites from '../favorites-page/favorites-page';
import Room from '../room-page/room-page';
import NotFound from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main
            offers={offers}
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
  offers: offersType,
  reviews: reviewsType,
};

export {App};
