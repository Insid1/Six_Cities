import {AppRoute} from '@src/const';
import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCity} from '@reducer/interface/action';
import PropTypes from 'prop-types';
import {offersType} from '@src/prop-type';


const FavoriteCityItem = ({cityName, cityOffers}) => {
  const dispatch = useDispatch();

  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link"
          onClick={() => {
            dispatch(setCity(cityName));
          }}
          to={AppRoute.MAIN}>
          <span>{cityName} ({cityOffers.length})</span>
        </Link>
      </div>
    </div>
  );
};

FavoriteCityItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityOffers: offersType,
};

export {FavoriteCityItem};
export default FavoriteCityItem;
