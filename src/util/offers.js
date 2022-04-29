
import {capitalize} from "./common";
import {SortingType} from "@src/const";

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
};

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

const sortOffers = (currOffers, sortType) => {
  const copiedOffers = currOffers.slice();
  switch (sortType) {
    case SortingType.POPULAR: {
      return copiedOffers;
    }
    case SortingType.PRICE_LOW_TO_HIGH: {
      return copiedOffers.sort((a, b) => a.price - b.price);
    }
    case SortingType.PRICE_HIGH_TO_LOW: {
      return copiedOffers.sort((a, b) => b.price - a.price);
    }
    case SortingType.TOP_RATED: {
      return copiedOffers.sort((a, b) => b.rating - a.rating);
    }
    default: {
      return copiedOffers;
    }
  }
};


export {filterByCity, sortOffers, filterFavoriteOffers};
