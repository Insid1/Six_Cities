const {setIsOffersLoaded, loadOffers, ActionType} = require(`./action`);

const offersMock = [
  {
    "city": {
      "name": `Cologne`
    },
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`
    ],
    "title": `The Joshua Tree House`,
    "rating": 2.6,
    "type": `house`,
    "bedrooms": 3,
    "price": 782,
    "goods": [
      `Fridge`,
      `Air conditioning`,
      `Breakfast`,
      `Towels`,
      `Laptop friendly workspace`,
      `Dishwasher`,
      `Baby seat`,
      `Washer`
    ],
    "host": {
      "avatarUrl": `img/avatar-angelina.jpg`,
      "hostId": 25,
      "isPro": true,
      "name": `Angelina`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "lat": 50.949361,
      "lng": 6.976974,
      "zoom": 16
    },
    "id": 1,
    "isFavorite": false,
    "isPremium": false,
    "maxAdults": 4,
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
  },
  {
    "city": {
      "name": `Hamburg`
    },
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
    ],
    "title": `Tile House`,
    "rating": 4,
    "type": `house`,
    "bedrooms": 1,
    "price": 781,
    "goods": [
      `Towels`,
      `Laptop friendly workspace`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`,
      `Washer`
    ],
    "host": {
      "avatarUrl": `img/avatar-angelina.jpg`,
      "hostId": 25,
      "isPro": true,
      "name": `Angelina`
    },
    "description": `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    "location": {
      "lat": 53.540341000000005,
      "lng": 10.025654000000001,
      "zoom": 16
    },
    "id": 2,
    "isFavorite": false,
    "isPremium": false,
    "maxAdults": 2,
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
  },
];

describe(`Action creators work correctly`, () => {

  it(`action creator for isOffersLoaded returns correct action`, () => {
    const extectedActionWithTrue = {
      type: ActionType.SET_IS_OFFERS_LOADED,
      payload: true,
    };
    const extectedActionWithFalse = {
      type: ActionType.SET_IS_OFFERS_LOADED,
      payload: false,
    };
    expect(setIsOffersLoaded(true)).toEqual(extectedActionWithTrue);
    expect(setIsOffersLoaded(false)).toEqual(extectedActionWithFalse);
  });

  it(`action creator for loadOffers returns correct action`, () => {
    const extectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offersMock,
    };
    expect(loadOffers(offersMock)).toEqual(extectedAction);
  });
});
