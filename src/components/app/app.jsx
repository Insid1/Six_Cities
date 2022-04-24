import React from "react";
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from "../main-page/main-page";
import SignIn from "../sign-in-page/sign-in-page";
import Favorites from "../favorites-page/favorites-page";
import Room from "../room-page/room-page";
import NotFound from "../not-found-page/not-found-page";
import {AppRoute} from "@src/const";
import PrivateRoute from "../private-route/private-route";
import {browserHistory} from "@src/browser-history/browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          path={AppRoute.FAVORITES}
          exact
          render={() => (
            <Favorites/>
          )}
        />
        <Route path={AppRoute.ROOM} exact>
          <Room/>
        </Route>
        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    </BrowserRouter>

  );
};

export {App};
export default App;
