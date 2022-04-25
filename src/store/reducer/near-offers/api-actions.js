import {ServerRoute} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
import {loadNearOffers} from "./action";

const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(ServerRoute.OFFER + id + ServerRoute.NEAR_BY_OFFERS)
    .then(({data}) => {
      const adaptedOffers = data.map(adaptOfferForClient);
      dispatch(loadNearOffers(adaptedOffers));
      return adaptedOffers;
    })
);


export {fetchNearOffers};
