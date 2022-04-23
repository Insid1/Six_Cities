import React, {memo} from 'react';
import {useRef} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import useMap from '../../hooks/usemap';
import useIcons from '../../hooks/useIcons';
import {useSelector} from 'react-redux';
import {getActiveOffer, getCity, getPageType} from '../../store/reducer/interface/selectors';
import {getCurrentOffers} from '../../store/reducer/offers/selectors';


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
  const pageType = useSelector(getPageType);
  const offers = useSelector((state) => {
    switch (pageType) {
      case PageType.MAIN: {
        return getCurrentOffers(state);
      }
      case PageType.ROOM: {
        return state.OFFERS.nearOffers;
      }
      default: {
        return getCurrentOffers(state);
      }
    }
  });
  const activeOffer = useSelector(getActiveOffer);
  const city = useSelector(getCity);

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
