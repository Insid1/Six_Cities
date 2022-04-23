import React from 'react';
import {useSelector} from 'react-redux';
import {capitalize} from '../../util.js/common';

const CityInfo = () => {
  const offersLength = useSelector((state) => state.DATA.offers.length);
  const city = useSelector((state) => state.INTERFACE.city);

  return (
    <b className="places__found">{offersLength} places to stay in {capitalize(city)}</b>
  );
};

export default CityInfo;
