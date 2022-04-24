import React, {memo} from 'react';
import {useRef} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import useMap from '../../hooks/usemap';
import useIcons from '../../hooks/useIcons';
import {useSelector} from 'react-redux';
import {selectActiveOffer, selectCity, selectPageType} from '../../store/reducer/interface/selectors';
import {selectCurrentOffers} from '../../store/reducer/offers/selectors';


const chooseClassForMap = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__map map`;
    case PageType.ROOM:
      return `property__map map`;
  }
  return `map`;
};

const Map = () => {
  const pageType = useSelector(selectPageType);
  const offers = useSelector((state) => {
    switch (pageType) {
      case PageType.MAIN: {
        return selectCurrentOffers(state);
      }
      case PageType.ROOM: {
        return state.OFFERS.nearOffers;
      }
      default: {
        return selectCurrentOffers(state);
      }
    }
  });
  const activeOffer = useSelector(selectActiveOffer);
  const city = useSelector(selectCity);

  const mapRef = useRef();
  const mapElement = useMap(mapRef, city, offers);
  useIcons(mapElement, activeOffer, offers);

  return (
    <section className={chooseClassForMap(pageType)}
      ref={mapRef}
    />
  );
};


export {Map};
export default memo(Map);
