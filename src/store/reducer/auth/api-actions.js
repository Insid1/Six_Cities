import {redirectToRoute} from "@reducer/interface/action";
import {setUserEmail, requireAuthorization} from "@reducer/auth/action";
import {AppRoute, AuthorizationStatus} from "@src/const";
import {ServerRoute} from "@src/const";


const checkAuthorization = () => (dispatch, _getState, api) => {

  return api.get(ServerRoute.LOGIN)
    .then(({data}) => {
      dispatch(setUserEmail(data.email));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});

};

const login = ({email, password}, setIsFetching) => (dispatch, _getState, api) => {

  return api.post(ServerRoute.LOGIN, {
    email,
    password,
  })
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => {
      setIsFetching(false);
      dispatch(setUserEmail(email));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
  ;
};

const logout = () => (dispatch, _getState, api) => {

  return api.get(ServerRoute.LOGOUT)
    .then(() => {
      dispatch(setUserEmail(``));
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    });
};


export {checkAuthorization, login, logout};
