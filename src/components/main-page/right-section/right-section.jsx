import React from 'react';
import Map from '@components/map/map';
import {useSelector} from 'react-redux';
import {PageType} from '@src/const';
import {selectFilteredOffers} from '@reducer/offers/selectors';

const RightSection = () => {
  const filteredOffers = useSelector(selectFilteredOffers);

  return (
    <div className="cities__right-section">
      {filteredOffers.length === 0
        ? ``
        : (
          <Map
            offers={filteredOffers}
            pageType={PageType.MAIN}
          />
        )}
    </div>
  );
};

export {RightSection};
export default RightSection;
