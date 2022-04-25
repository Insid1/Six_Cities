import {mapToCityLocation} from "../const";

const adaptReviewForClient = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      isPro: review.user[`is_pro`],
      avatarUrl: review.user[`avatar_url`],
    }
  };

  delete adaptedReview.user[`is_pro`];
  delete adaptedReview.user[`avatar_url`];
  return adaptedReview;
};

const adaptOfferForClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    city: {
      name: offer.city.name,
    },
    host: {
      avatarUrl: offer.host[`avatar_url`],
      hostId: offer.host.id,
      isPro: offer.host[`is_pro`],
      name: offer.host.name,
    },
    isFavorite: offer[`is_favorite`],
    isPremium: offer[`is_premium`],
    location: {
      lat: offer.location[`latitude`],
      lng: offer.location[`longitude`],
      zoom: offer.location.zoom,
    },
    maxAdults: offer[`max_adults`],
    previewImage: offer[`preview_image`],
  };

  delete adaptedOffer[`is_favorite`];
  delete adaptedOffer[`is_premium`];
  delete adaptedOffer[`max_adults`];
  delete adaptedOffer[`preview_image`];

  return adaptedOffer;
};

const adaptOfferForServer = (offer) => {
  const CityName = offer.city.name.toUpperCase();

  const adaptedOffer = {
    ...offer,
    "city": {
      "name": offer.city.name,
      "location": {
        "latitude": mapToCityLocation[CityName].location[0],
        "longitude": mapToCityLocation[CityName].location[1],
        "zoom": 13
      }
    },
    "preview_image": offer.previewImage,
    "is_favorite": offer.isFavorite,
    "is_premium": offer.isPremium,
    "max_adults": offer.maxAdults,
    "host": {
      "id": offer.host.hostId,
      "name": offer.host.name,
      "is_pro": offer.host.isPro,
      "avatar_url": offer.host.avatarUrl
    },
    "location": {
      "latitude": offer.location.lat,
      "longitude": offer.location.lng,
      "zoom": 16
    },
  };
  delete adaptedOffer.previewImage;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  return adaptedOffer;
};

export {adaptOfferForClient, adaptOfferForServer, adaptReviewForClient};
