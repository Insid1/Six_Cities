import {selectFavoriteOffers} from '@reducer/favorites/selectors';
import React from 'react';
import {useSelector} from 'react-redux';
import {FavoriteCard} from './favorite-card';
import FavoriteEmpty from './favorite-empty';

const FavoriteList = () => {

  const favoriteOffers = useSelector(selectFavoriteOffers);

  if (Object.keys(favoriteOffers).length === 0) {
    return <FavoriteEmpty/>;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoriteOffers).map(([cityName, cityOffers]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link"
                  href="#">
                  <span>{cityName} ({cityOffers.length})</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((offer) => (<FavoriteCard
                offer={offer}
                key={offer.id} />))}
            </div>
          </li>
        )
        )}
      </ul>
    </section>

  );
};

export default FavoriteList;
