const AppRoute = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  ROOM: `/offer/:id`,
};

const PageType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
};

const SortingType = {
  POPULAR: `POPULAR`,
  PRICE_LOW_TO_HIGH: `PRICE_LOW_TO_HIGH`,
  PRICE_HIGH_TO_LOW: `PRICE_HIGH_TO_LOW`,
  TOP_RATED: `TOP_RATED`,
};

const mapToCityLocation = {
  PARIS: {
    name: `Paris`,
    location: [48.8653, 2.34565],
  },
  COLOGNE: {
    name: `Cologne`,
    location: [50.94958, 6.96042],
  },
  BRUSSELS: {
    name: `Brussels`,
    location: [50.83930, 4.35572],
  },
  AMSTERDAM: {
    name: `Amsterdam`,
    location: [52.370216, 4.895168],
  },
  HAMBURG: {
    name: `Hamburg`,
    location: [53.55221, 9.98971]
  },
  DUSSELDORF: {
    name: `Dusseldorf`,
    location: [51.22392, 6.77352],
  }
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ServerRoute = {
  OFFERS: `/hotels`,
  OFFER: ` /hotels/: id`, // REWORK IT
  NEAR_BY_OFFERS: `/hotels/: hotel_id/nearby`, // REWORK IT
  FAVORITE_OFFERS: `/favorite`,
  FAVORITE_OFFER: `/favorite/: hotel_id/: status`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const RATING_WIDTH = 20;

export {AppRoute, RATING_WIDTH, PageType, mapToCityLocation, SortingType, AuthorizationStatus, ServerRoute};
