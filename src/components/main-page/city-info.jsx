import React from 'react';
import {useSelector} from 'react-redux';
import {capitalize} from '@util/common';
import {getCity} from '@reducer/interface/selectors';
import {getCurrOffersLength} from '@reducer/offers/selectors';

const CityInfo = () => {
  const offersLength = useSelector(getCurrOffersLength);
  const city = useSelector(getCity);

  return (
    <b className="places__found">{offersLength} places to stay in {capitalize(city)}</b>
  );
};

export default CityInfo;
