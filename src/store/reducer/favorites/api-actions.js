import {ServerRoute} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
import {filterFavoriteOffers} from "@util/offers";
import {loadFavoriteOffers, setIsFavoriteOffersLoaded} from "./action";


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
    })
    .catch(() => {
    });
};

const postFavoriteOffer = (favoriteStatus, id) => (dispatch, _getState, api) => {
  // values may be 1 or 0. 0-delete, 1-add
  const status = favoriteStatus ? 0 : 1;
  return api.post(`${ServerRoute.FAVORITE_OFFERS}${id}/${status}`)
    .catch(() => {});
};


export {fetchFavoriteOffers, postFavoriteOffer};
