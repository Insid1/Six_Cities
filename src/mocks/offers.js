import {nanoid} from 'nanoid';
import {mapToCityLocation} from '../const';
import {getRandomFloat, getRandomInt, getRandomValueFromArr, getTrueOrFalse} from '../util.js/common';

const OFFERS_NUMBER = 4;

const Goods = [
  `Heating,`,
  `Kitchen, Cable TV`,
  `Washing machine`,
  `Coffee machine`,
  `Dishwasher`,
];

const HostNames = [
  `Anna`,
  `Kate`,
  `Angelina`,
  `Oleg`,
  `Ivan`,
  `Max`,
];

const Images = [
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/room.jpg`,
];

const types = [
  `room`,
  `apartments`,
];

const Titles = [
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Beautiful & luxurious studio at great location`,
];

const cityNames = Object.keys(mapToCityLocation);

const addRandCord = (location) => {
  const randCord = getRandomFloat(0, 0.1, 4);
  if (Math.random() > 0.5) {
    return location + randCord;
  }
  return location - randCord;
};

const createCityOffer = (city = `amsterdam`) => {
  city = city.toUpperCase();

  return {
    bedrooms: getRandomInt(1, 5),
    city: {
      location: {
        lat: mapToCityLocation[city].location[0],
        lng: mapToCityLocation[city].location[1],
        zoom: 10,
      },
      name: mapToCityLocation[city].name,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: Goods,
    host: {
      avatarUrl: `img/avatar.swg`,
      hostId: nanoid(),
      isPro: getTrueOrFalse(),
      name: getRandomValueFromArr(HostNames)
    },
    id: nanoid(),
    images: Images,
    isFavorite: getTrueOrFalse(),
    isPremium: getTrueOrFalse(),
    location: {
      lat: addRandCord(mapToCityLocation[city].location[0]),
      lng: addRandCord(mapToCityLocation[city].location[1]),
      zoom: 8,
    },
    maxAdults: getRandomInt(0, 6),
    previewImage: getRandomValueFromArr(Images),
    price: getRandomInt(10, 200),
    rating: getRandomFloat(0, 5, 1),
    title: getRandomValueFromArr(Titles),
    type: getRandomValueFromArr(types),
  };
};

const createOffers = () => {
  const totalOffers = {};

  cityNames.forEach((cityName) => {
    totalOffers[cityName] = new Array(OFFERS_NUMBER).fill().map(() => createCityOffer(cityName));
  });
  return totalOffers;
};

const offers = createOffers();

const test = offers[`AMSTERDAM`];

export {test as offersAmsterdam, offers};
