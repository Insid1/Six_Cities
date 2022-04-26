import {selectFavoriteOffers} from '@reducer/favorites/selectors';
import React from 'react';
import {useSelector} from 'react-redux';
import {FavoriteCard} from './favorite-card';
import FavoriteCityItem from './favorite-city-item';
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
            <FavoriteCityItem cityName={cityName} cityOffers={cityOffers}/>
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
