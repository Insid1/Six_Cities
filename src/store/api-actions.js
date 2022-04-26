import {loadOffers, setIsOffersLoaded} from "@reducer/offers/action";
import {redirectToRoute, selectOffer, setCity, setIsSelectedOfferLoaded} from "@reducer/interface/action";
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
    })
    .then(() => {
      dispatch(setIsOffersLoaded(true));
    })
);

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

const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setIsSelectedOfferLoaded(false));
  return api.get(`${ServerRoute.OFFERS}${id}`)
    .then(({data}) => {
      return adaptOfferForClient(data);
    })
    .then((data) => {
      dispatch(setCity(data.city.name.toUpperCase()));
      dispatch(selectOffer(data));
    })
    .then(() => {
      dispatch(setIsSelectedOfferLoaded(true));
    })
    .catch(() => {
      dispatch(redirectToRoute(`..${ServerRoute.ERROR}`));
    });
};


export {fetchOfferList, checkAuthorization, login, logout, fetchOffer};
