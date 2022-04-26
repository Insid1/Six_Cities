import React from "react";
import {Link} from "react-router-dom";
import {offerType} from "@src/prop-type";
import {RATING_WIDTH} from "@src/const";
import FavoriteButton from "@components/favorite-btn/favorite-button";

const FavoriteCard = ({offer}) => {
  const {previewImage, price, title, type, rating, id} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            alt="Place image"
            width="150"
            height="110" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={true} offerId={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${rating * RATING_WIDTH}%`,
              }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

FavoriteCard.propTypes = {
  offer: offerType
};

export {FavoriteCard};
