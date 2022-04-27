import {loadOffers, setIsOffersLoaded} from "@reducer/offers/action";
import {redirectToRoute, selectOffer, setCity, setIsSelectedOfferLoaded} from "@reducer/interface/action";
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


export {fetchOfferList, fetchOffer};
