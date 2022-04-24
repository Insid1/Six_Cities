import React from 'react';
import {useSelector} from 'react-redux';
import {capitalize} from '@util/common';
import {selectCity} from '@reducer/interface/selectors';
import {selectCurrOffersLength} from '@reducer/offers/selectors';

const CityInfo = () => {
  const offersLength = useSelector(selectCurrOffersLength);
  const city = useSelector(selectCity);

  return (
    <b className="places__found">{offersLength} places to stay in {capitalize(city)}</b>
  );
};

export default CityInfo;
