import React from 'react';
import {capitalize} from '@util/common';
import {offerType} from '@src/prop-type';

const RATING_WIDTH = 30;


const RoomInfo = ({offer}) => {
  const {
    title, goods,
    maxAdults, rating,
    bedrooms, price,
    type,
  } = offer;

  return (
    <>
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span
            style={{
              width: RATING_WIDTH * rating
            }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {capitalize(type)}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
    Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">€{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&#39;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((item) => (
            <li key={item} className="property__inside-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

RoomInfo.propTypes = {
  offer: offerType,
};

export default RoomInfo;
