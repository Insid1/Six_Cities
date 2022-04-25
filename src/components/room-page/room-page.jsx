import React, {useEffect} from 'react';
import Comment from './review/review-form';
import {ReviewList} from './review/review-list';
import Map from '@components/map/map';
import Header from '@components/header/header';
import HostInfo from './room-components/room-host-info';
import Loader from '@components/loader/loader';
import {fetchOffer} from '@store/api-actions';
import {AuthorizationStatus, PageType} from '@src/const';
import {selectAuthStatus} from '@reducer/auth/selectors';
import {selectIsSelectedOfferLoaded, selectSelectedOffer} from '@reducer/interface/selectors';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchReviews} from '@reducer/reviews/api-actions';
import {fetchNearOffers} from '@reducer/near-offers/api-actions';
import {selectIsNearOffersLoaded, selectNearOffers} from '@reducer/near-offers/selectors';
import RoomInfo from './room-components/room-info';
import RoomNearOffers from './room-components/room-near-offers';
import RoomGalery from './room-components/room-galery';


const Room = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearOffers(id));
  }, [id, dispatch]);

  const nearOffers = useSelector(selectNearOffers);
  const selectedOffer = useSelector(selectSelectedOffer);
  const authorizationStatus = useSelector(selectAuthStatus);
  const isSelectedOfferLoaded = useSelector(selectIsSelectedOfferLoaded);
  const isNearOffersLoaded = useSelector(selectIsNearOffersLoaded);

  if (!isSelectedOfferLoaded) {
    return <Loader />;
  }

  const {
    images, isPremium,
    description, host,
  } = selectedOffer;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <RoomGalery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <RoomInfo
                offer={selectedOffer}
              />
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
        </section>
        {isNearOffersLoaded && nearOffers.length !== 0
          ? (
            <>
              <Map
                pageType={PageType.ROOM}
                offers={nearOffers}
              />
              <RoomNearOffers nearOffers={nearOffers}/>
            </>
          )
          : ``
        }
      </main>
    </div>
  );
};


export default Room;
