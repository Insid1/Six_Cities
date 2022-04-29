import {createApi} from "@api/api";
import {ActionType, loadFavoriteOffers, setIsFavoriteOffersLoaded} from "./action";
import favoritesReducer from "./favorites-reducer";
import MockAdapter from 'axios-mock-adapter';
import {fetchFavoriteOffers} from "./api-actions";
import {ServerRoute} from "@src/const";
import {filterFavoriteOffers} from "@util/offers";
import {adaptOfferForClient} from "@util/adapter";


const api = createApi();
const offersMock = [
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
    ],
    "title": `Penthouse, 4-5 rooms + 5 balconies`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 4.1,
    "type": `apartment`,
    "bedrooms": 4,
    "max_adults": 5,
    "price": 446,
    "goods": [
      `Laptop friendly workspace`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 48.83861,
      "longitude": 2.350499,
      "zoom": 16
    },
    "id": 13
  },
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`
    ],
    "title": `The Pondhouse - A Magical Place`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 2,
    "type": `house`,
    "bedrooms": 2,
    "max_adults": 9,
    "price": 693,
    "goods": [
      `Breakfast`,
      `Laptop friendly workspace`,
      `Washer`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    "location": {
      "latitude": 48.87861,
      "longitude": 2.357499,
      "zoom": 16
    },
    "id": 3
  },
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`
    ],
    "title": `Wood and stone place`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 3.3,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 3,
    "price": 198,
    "goods": [
      `Towels`,
      `Coffee machine`,
      `Dishwasher`,
      `Baby seat`,
      `Fridge`,
      `Breakfast`,
      `Laptop friendly workspace`,
      `Washer`,
      `Air conditioning`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 48.846610000000005,
      "longitude": 2.374499,
      "zoom": 16
    },
    "id": 35
  },
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`
    ],
    "title": `Canal View Prinsengracht`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 3.2,
    "type": `apartment`,
    "bedrooms": 4,
    "max_adults": 6,
    "price": 351,
    "goods": [
      `Washer`,
      `Air conditioning`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Towels`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    "location": {
      "latitude": 52.367540000000005,
      "longitude": 4.883976,
      "zoom": 16
    },
    "id": 12
  },
  {
    "city": {
      "name": `Hamburg`,
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`
    ],
    "title": `Waterfront with extraordinary view`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 3.2,
    "type": `house`,
    "bedrooms": 4,
    "max_adults": 9,
    "price": 724,
    "goods": [
      `Breakfast`,
      `Washer`,
      `Laptop friendly workspace`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 53.550341,
      "longitude": 9.980654000000001,
      "zoom": 16
    },
    "id": 7
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`
    ],
    "title": `The Pondhouse - A Magical Place`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 2.4,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 2,
    "price": 289,
    "goods": [
      `Towels`,
      `Baby seat`,
      `Air conditioning`,
      `Washer`,
      `Dishwasher`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Fridge`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 50.867557,
      "longitude": 4.371696999999999,
      "zoom": 16
    },
    "id": 10
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`
    ],
    "title": `Tile House`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 4.1,
    "type": `house`,
    "bedrooms": 3,
    "max_adults": 10,
    "price": 493,
    "goods": [
      `Breakfast`,
      `Laptop friendly workspace`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    "location": {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      "zoom": 16
    },
    "id": 17
  }
];

const initialState = {
  favoriteOffers: {},
  isFavoriteOffersLoaded: false,
};

describe(`favorites reducer works correctly`, () => {

  it(`reducer initialization with not given parameters gives correct initial state`, () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  describe(`reducer with action loadFAvoritesOffers works correctly`, () => {
    it(`reducer with custom action with not empty array works correctly`, () => {
      expect(favoritesReducer(initialState, {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [1, 2, 3, 4, 5],
      })).toEqual({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4, 5],
      });
    });
    it(`reducer with custom action with empty array works correctly`, () => {
      expect(favoritesReducer({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4]
      }, {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [],
      })).toEqual({
        ...initialState,
        favoriteOffers: [],
      });
    });
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: ActionType.IS_FAVORITE_OFFERS_LOADED,
      payload: true,
    })).toEqual({
      ...initialState,
      isFavoriteOffersLoaded: true,
    });
  });
  it(`reducer with custom action with unknown parameters works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: `unknown type`,
      payload: true,
    })).toEqual(initialState);
  });
  it(`reducer with custom action with true for loaderStatus works correctly`, () => {
    expect(favoritesReducer(initialState, {
      type: ActionType.IS_FAVORITE_OFFERS_LOADED,
      payload: false,
    })).toEqual({
      ...initialState,
      isFavoriteOffersLoaded: false,
    });
  });
  describe(`reducer with action creator loadFavoriteOffers works correctly`, () => {
    it(`reducer with action creator loadFavoriteOffers with empty array works correctly`, () => {
      expect(favoritesReducer(initialState, loadFavoriteOffers([]))).toEqual({
        ...initialState,
        favoriteOffers: [],
      });
    });
    it(`reducer with action creator loadFavoriteOffers with not empty array works correctly`, () => {
      expect(favoritesReducer(initialState, loadFavoriteOffers([1, 2, 3, 4, 5]))).toEqual({
        ...initialState,
        favoriteOffers: [1, 2, 3, 4, 5],
      });
    });
  });
  describe(`reducer with action setIsFavoriteOffersLoaded works correctly`, () => {
    it(`reducer with action creator setIsFavoriteOffersLoaded with false works correctly`, () => {
      expect(favoritesReducer(initialState, setIsFavoriteOffersLoaded(false))).toEqual({
        ...initialState,
        isFavoriteOffersLoaded: false,
      });
    });
    it(`reducer with action creator setIsFavoriteOffersLoaded with true works correctly`, () => {
      expect(favoritesReducer(initialState, setIsFavoriteOffersLoaded(true))).toEqual({
        ...initialState,
        isFavoriteOffersLoaded: true,
      });
    });
  });
});

describe(`async operation works correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(ServerRoute.FAVORITE_OFFERS)
      .reply(200, offersMock);

    return fetchFavoriteOffersLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(3);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.IS_FAVORITE_OFFERS_LOADED,
            payload: false,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.LOAD_FAVORITE_OFFERS,
            payload: filterFavoriteOffers(offersMock.map(adaptOfferForClient)),
          });
          expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: ActionType.IS_FAVORITE_OFFERS_LOADED,
            payload: true,
          });
        });
  });
});
