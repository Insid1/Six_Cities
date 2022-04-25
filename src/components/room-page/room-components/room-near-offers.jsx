import React from 'react';
import {PageType} from '@src/const';
import CardList from '@components/card/card-list';
import {offersType} from '@src/prop-type';

const RoomNearOffers = ({nearOffers}) => {
  return (
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
  );
};

RoomNearOffers.propTypes = {
  nearOffers: offersType,
};

export default RoomNearOffers;
