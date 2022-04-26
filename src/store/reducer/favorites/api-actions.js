import {ServerRoute} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
import {loadFavoriteOffers, setIsFavoriteOffersLoaded} from "./action";

const filterFavoriteOffers = (offers) => {
  const result = {};
  offers.forEach((offer) => {
    const city = offer.city.name.toUpperCase();
    if (!result[city]) {
      result[city] = [];
    }
    result[city].push(offer);
  });
  return result;
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(setIsFavoriteOffersLoaded(false));

  return api.get(ServerRoute.FAVORITE_OFFERS)
    .then(({data}) => {
      const adaptedOffers = filterFavoriteOffers(data.map(adaptOfferForClient));
      dispatch(loadFavoriteOffers(adaptedOffers));
      return adaptedOffers;
    })
    .then(() => {
      dispatch(setIsFavoriteOffersLoaded(true));
    });

};


export {fetchFavoriteOffers};
