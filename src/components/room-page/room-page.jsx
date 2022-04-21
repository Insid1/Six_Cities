import React, {useEffect} from 'react';
import Comment from './comment';
import {ReviewList} from './review/review-list';
import {offersType, offerType, reviewsType} from '../../prop-type';
import Map from '../map/map';
import PropTypes from 'prop-types';
import {CardList} from '../main-page/card-list';
import {connect} from 'react-redux';
import Header from '../header/header';
import TitleImg from './title-img';
import {capitalize} from '../../util.js/common';
import HostInfo from './host-info';
import Loader from '../loader/loader';
import {fetchOffer} from '../../api/api-actions';
import {AuthorizationStatus} from '../../const';
import {useParams} from 'react-router-dom';

const RATING_WIDTH = 30;

const Room = ({reviews, nearOffers, type, authorizationStatus, getOffer, selectedOffer, isDataLoaded}) => {
  const {id} = useParams();

  useEffect(() => {
    getOffer(id);
  }, [id, getOffer]);

  if (selectedOffer === null || !isDataLoaded) {
    return <Loader />;
  }

  const {
    images,
    isPremium,
    title,
    description,
    host,
    goods,
    maxAdults,
    rating,
    bedrooms,
    price,
  } = selectedOffer;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((imgSrc) => <TitleImg key={imgSrc} imgSrc={imgSrc}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
              &&
            <div className="property__mark">
              <span>Premium</span>
            </div>}
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
              <HostInfo
                description={description}
                host={host}/>
              <section className="property__reviews reviews">
                <ReviewList
                  reviews={reviews}
                />
                {authorizationStatus === AuthorizationStatus.AUTH
                  && <Comment id={+id}
                  />}
              </section>
            </div>
          </div>
          <Map
            offers={nearOffers}
            type={type}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList
                offers={nearOffers}
                type={type}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  reviews: reviewsType,
  nearOffers: offersType,
  type: PropTypes.string.isRequired,
  selectedOffer: offerType,
  getOffer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  nearOffers: state.nearOffers,
  reviews: state.reviews,
  selectedOffer: state.selectedOffer,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getOffer(id) {
    dispatch(fetchOffer(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Room);
