import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {offerType} from "../../prop-type";
import {RATING_WIDTH} from "../../const";
import {PageType} from "../../const";

const mapForRoomType = {
  apartments: `Apartments`,
  room: `Privat Room`,
};

const chooseClassForCard = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__place-card place-card`;
    case PageType.ROOM:
      return `near-places__card place-card`;
  }
  return `places__list`;
};

const choosePath = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `offer/`;
    case PageType.ROOM:
      return ``;
  }
  return `offer/`;
};

const Card = ({offer = {}, onMouseEnter, onMouseLeave, pageType}) => {
  const {price, previewImage, type, isFavorite, isPremium, rating, id} = offer;

  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    onMouseEnter(id);
  };

  const bookBtnClass = `place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`;
  return (
    <article className={chooseClassForCard(pageType)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${choosePath(pageType)}${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={id} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookBtnClass}
            type="button">
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${rating * RATING_WIDTH}%`,
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{mapForRoomType[type]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: offerType,
  pageType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {Card};
