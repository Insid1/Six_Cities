import {setLoader, loadOffers, setUserEmail, requireAuthorization, redirectToRoute, selectOffer, fillOffers} from "./action";
import {AppRoute, AuthorizationStatus} from "../const";
import {adaptOfferForClient} from "../util.js/adapter";
import {ServerRoute} from "../const";
import {capitalize} from "../util.js/common";

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
};

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(ServerRoute.OFFERS)
    .then(({data}) => {
      // adapts given data for client
      const adaptedData = data.map(adaptOfferForClient);
      // dispatch to store adapted data
      dispatch(loadOffers(adaptedData));
      return adaptedData;
    })
    .then((data) => {
      // gets current city from
      const city = _getState().INTERFACE.city;
      // filters all offers by current city
      const filteredOffers = filterByCity(data, city);
      // dispatch filtered offers to store
      dispatch(fillOffers(filteredOffers));

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
