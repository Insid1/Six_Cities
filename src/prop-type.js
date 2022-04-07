import PropTypes from 'prop-types';

const offerType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
);

const offersType = PropTypes.arrayOf(offerType);

export {offerType, offersType};
