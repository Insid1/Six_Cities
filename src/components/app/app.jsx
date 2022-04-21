import React from "react";
import {offersType} from "../../prop-type";
import {reviewsType} from "../../prop-type";
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main-page/main-page';
import SignIn from '../sign-in-page/sign-in-page';
import Favorites from '../favorites-page/favorites-page';
import Room from '../room-page/room-page';
import NotFound from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';
import {PageType} from "../../const";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import {browserHistory} from "../../browser-history/browser-history";

const App = ({offers}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main
            offers={offers}
            type={PageType.MAIN}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          path={AppRoute.FAVORITES}
          exact
          render={() => (
            <Favorites
              offers={offers}
            />
          ) }
        />
        <Route path={AppRoute.ROOM} exact>
          <Room
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

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps)(App);
