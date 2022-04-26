import React from "react";
import PropTypes from 'prop-types';
import {offerType} from "@src/prop-type";
import {RATING_WIDTH, PageType} from "@src/const";
import {useDispatch} from "react-redux";
import {setActiveOffer} from "@store/reducer/interface/action";
import {Link} from "react-router-dom";
import FavoriteButton from "@components/favorite-btn/favorite-button";


const chooseClassForCard = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__place-card place-card`;
    case PageType.ROOM:
      return `near-places__card place-card`;
  }
  return `places__list`;
};


const Card = ({offer = {}, pageType}) => {
  const {price, previewImage, type, isPremium, rating, id, isFavorite} = offer;
  const dispatch = useDispatch();

  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    dispatch(setActiveOffer(id));
  };
  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    dispatch(setActiveOffer(null));
  };


  return (
    <article className={chooseClassForCard(pageType)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`../offer/${id}`}>
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
          <FavoriteButton isFavorite={isFavorite} offerId={id}/>
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
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: offerType,
  pageType: PropTypes.string.isRequired,
};


export {Card};
export default Card;
