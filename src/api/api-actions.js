import {ActionCreator} from "../store/action";
import {AppRoute, AuthorizationStatus} from "../const";
import {adaptOfferForClient} from "../util.js/adapter";
import {ServerRoute} from "../const";

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(ServerRoute.OFFERS)
    .then(({data}) => {
      return dispatch(ActionCreator.loadOffers(data.map(adaptOfferForClient)));
    })
);

const checkAuthorization = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoader());

  return api.get(ServerRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUserEmail(data.email));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});

};


const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoader());

  return api.post(ServerRoute.LOGIN, {
    email,
    password,
  })
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => {
      dispatch(ActionCreator.setUserEmail(email));
      dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN));
    })
  ;
};

const logout = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoader());

  return api.get(ServerRoute.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.setUserEmail(``));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    });
};


export {fetchOfferList, checkAuthorization, login, logout};
