import {postFavoriteOffer} from '@reducer/favorites/api-actions';
import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';


const mapToButtonClass = {
  CARD: `place-card__`,
  ROOM: `property__`,
};

const mapToSVGStyle = {
  CARD: {
    width: `18`,
    height: `19`,
  },
  ROOM: {
    width: `31`,
    height: `33`,
  },
};

const FavoriteButton = ({isFavorite, buttonType = `CARD`, offerId}) => {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const [isFetching, setIsFetching] = useState(false);
  const btnRef = useRef();
  const dispatch = useDispatch();

  const bookBtnClass = `${mapToButtonClass[buttonType]}bookmark-button button ${
    favoriteStatus
      ? `${mapToButtonClass[buttonType]}bookmark-button--active`
      : ``
  }`;

  const handleOnClick = (evt) => {
    evt.preventDefault();
    setIsFetching(true);

    dispatch(postFavoriteOffer(favoriteStatus, offerId))
      .then(() => {
        setFavoriteStatus(!favoriteStatus);
        setIsFetching(false);
      });
  };

  return (
    <button className={bookBtnClass}
      disabled={isFetching}
      type="button"
      ref={btnRef}
      onClick={handleOnClick}>
      <svg className={`${mapToButtonClass[buttonType]}bookmark-icon`}
        width={mapToSVGStyle[buttonType].width}
        height={mapToSVGStyle[buttonType].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>

  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  buttonType: PropTypes.string,
  offerId: PropTypes.number.isRequired,
};

export default FavoriteButton;
