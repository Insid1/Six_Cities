import React from 'react';
import Map from '@components/map/map';
import {useSelector} from 'react-redux';
import {selectFilteredOffers} from '@reducer/selectors-common';
import {PageType} from '@src/const';

const RightSection = () => {
  const filteredOffers = useSelector(selectFilteredOffers);

  return (
    <div className="cities__right-section">
      <Map
        offers={filteredOffers}
        pageType={PageType.MAIN}
      />
    </div>
  );
};

export {RightSection};
export default RightSection;
