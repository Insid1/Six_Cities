import {loadOffers} from "@reducer/offers/action";
import {setLoader, redirectToRoute, selectOffer} from "@reducer/interface/action";
import {setUserEmail, requireAuthorization} from "@reducer/auth/action";
import {AppRoute, AuthorizationStatus} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
import {ServerRoute} from "@src/const";


const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(ServerRoute.OFFERS)
    .then(({data}) => {
      // adapts given data for client
      const adaptedData = data.map(adaptOfferForClient);
      // dispatch to store adapted data
      dispatch(loadOffers(adaptedData));
      return adaptedData;
    })
);

const checkAuthorization = () => (dispatch, _getState, api) => {
  dispatch(setLoader());

  return api.get(ServerRoute.LOGIN)
    .then(({data}) => {
      dispatch(setUserEmail(data.email));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});

};

const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(setLoader());

  return api.post(ServerRoute.LOGIN, {
    email,
    password,
  })
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => {
      dispatch(setUserEmail(email));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
  ;
};

const logout = () => (dispatch, _getState, api) => {
  dispatch(setLoader());

  return api.get(ServerRoute.LOGOUT)
    .then(() => {
      dispatch(setUserEmail(``));
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    });
};

const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setLoader());

  return api.get(`${ServerRoute.OFFER}${id}`)
    .then(({data}) => {
      return adaptOfferForClient(data);
    })
    .then((data) => {
      dispatch(selectOffer(data));
    })
    .catch(() => {
      dispatch(redirectToRoute(`../error`));
    });
};

const postComment = (id, {rating, comment}) => (dispatch, _getState, api) => {
  return api.post(ServerRoute.COMMENT + id, {comment, rating});
};


export {fetchOfferList, checkAuthorization, login, logout, fetchOffer, postComment};
