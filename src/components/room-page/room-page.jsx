import React, {useEffect} from 'react';
import Comment from './review';
import {ReviewList} from './review/review-list';
import Map from '@components/map/map';
import CardList from '@components/card/card-list';
import Header from '@components/header/header';
import TitleImg from './title-img';
import {capitalize} from '@util/common';
import HostInfo from './host-info';
import Loader from '@components/loader/loader';
import {fetchOffer} from '@store/api-actions';
import {AuthorizationStatus, PageType} from '@src/const';
import {selectAuthStatus} from '@reducer/auth/selectors';
import {selectSelectedOffer} from '@reducer/interface/selectors';
import {selectIsOffersLoaded} from '@reducer/offers/selectors';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchReviews} from '@reducer/reviews/api-actions';
import {fetchNearOffers} from '@reducer/near-offers/api-actions';
import {selectNearOffers} from '@reducer/near-offers/selectors';


const RATING_WIDTH = 30;

const Room = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const nearOffers = useSelector(selectNearOffers);


  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearOffers(id));
  }, [id, dispatch]);

  const selectedOffer = useSelector(selectSelectedOffer);
  const isDataLoaded = useSelector(selectIsOffersLoaded);
  const authorizationStatus = useSelector(selectAuthStatus);

  if (!isDataLoaded) {
    return <Loader />;
  }

  const {
    images, isPremium,
    title, description,
    host, goods,
    maxAdults, rating,
    bedrooms, price,
    type,
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
                <ReviewList/>
                {authorizationStatus === AuthorizationStatus.AUTH
                  && <Comment hotelId={+id}
                  />}
              </section>
            </div>
          </div>
          <Map
            pageType={PageType.ROOM}
            offers={nearOffers}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList
                pageType={PageType.ROOM}
                offers={nearOffers}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


export default Room;
