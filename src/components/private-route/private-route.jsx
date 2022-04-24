import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const';
import {useSelector} from 'react-redux';
import {selectAuthStatus} from '../../store/reducer/auth/selectors';


const PrivateRoute = ({render, path, exact}) => {
  const authorizationStatus = useSelector(selectAuthStatus);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};


export {PrivateRoute};
export default PrivateRoute;
