import {ServerRoute} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
import {loadNearOffers, setIsNearOffersLoaded} from "./action";

const fetchNearOffers = (id) => (dispatch, _getState, api) => {
  dispatch(setIsNearOffersLoaded(false));

  return api.get(ServerRoute.OFFER + id + ServerRoute.NEAR_BY_OFFERS)
    .then(({data}) => {
      const adaptedOffers = data.map(adaptOfferForClient);
      dispatch(loadNearOffers(adaptedOffers));
      return adaptedOffers;
    })
    .then(() => {
      dispatch(setIsNearOffersLoaded(true));
    });

};


export {fetchNearOffers};
