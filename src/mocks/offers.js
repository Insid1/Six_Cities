import {nanoid} from 'nanoid';
import {getRandomFloat, getRandomInt, getRandomValueFromArr, getTrueOrFalse} from '../util.js/common';

const Cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

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

const Locations = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
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

const AmsterdamLocation = {
  lat: 52.370216,
  lng: 4.895168,
  zoom: 10
};

const Titles = [
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Beautiful & luxurious studio at great location`,
];

const createAmsterdamOffer = () => ({
  bedrooms: getRandomInt(1, 5),
  city: {
    location: AmsterdamLocation,
    name: Cities[3],
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
  offerLocation: {
    lat: Locations[0][0],
    lng: Locations[0][1],
    zoom: 8
  },
  maxAdults: getRandomInt(0, 6),
  previewImage: getRandomValueFromArr(Images),
  price: getRandomInt(10, 200),
  rating: getRandomFloat(0, 5, 1),
  title: getRandomValueFromArr(Titles),
  type: getRandomValueFromArr(types),

});

const offersAmsterdam = new Array(4).fill().map(createAmsterdamOffer);

export {offersAmsterdam};
