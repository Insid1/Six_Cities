import PropTypes from 'prop-types';

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

const hostType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  hostId: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

const offerLocationType = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: cityType,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
  host: hostType,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: offerLocationType,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxAdults: PropTypes
    .oneOfType(
        [
          PropTypes.number,
          PropTypes.string
        ]
    ).isRequired,
}
);

const reviewType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })
});

const offersType = PropTypes.arrayOf(offerType);
const reviewsType = PropTypes.arrayOf(reviewType);

export {offerType, offersType, reviewType, reviewsType, hostType};
