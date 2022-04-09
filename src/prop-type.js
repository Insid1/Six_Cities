import PropTypes from 'prop-types';

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired, // must add concrete types
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired, // must add concrete types
  host: PropTypes.object.isRequired, // must add concrete types
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired, // must add concrete types
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  offerLocation: PropTypes.object.isRequired, // must add concrete types
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

const offersType = PropTypes.arrayOf(offerType);

export {offerType, offersType};
