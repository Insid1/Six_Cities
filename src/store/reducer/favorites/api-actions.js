import {ServerRoute} from "@src/const";
import {adaptOfferForClient} from "@util/adapter";
// import { useSelector } from "react-redux";
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
    })
    .catch(() => {
    });
};

const postFavoriteOffer = (favoriteStatus, id) => (dispatch, _getState, api) => {
  // значения могут быть 1 - добавляет , 0 - удаляет
  const status = favoriteStatus ? 0 : 1;
  return api.post(`${ServerRoute.FAVORITE_OFFERS}${id}/${status}`)
    .catch(() => {}); // Обработать ошибку отправки
};


export {fetchFavoriteOffers, postFavoriteOffer};