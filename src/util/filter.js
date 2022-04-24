import {capitalize} from "./common";

const filterByCity = (offers = [], cityName) => {
  cityName = capitalize(cityName);
  return offers.filter((offer) => offer.city.name === cityName);
};

export {filterByCity};
