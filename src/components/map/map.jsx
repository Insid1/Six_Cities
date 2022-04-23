import React, {memo} from 'react';
import {useRef} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import useMap from '../../hooks/usemap';
import useIcons from '../../hooks/useIcons';
import {useSelector} from 'react-redux';


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
  const pageType = useSelector((state) => state.INTERFACE.pageType);
  const offers = useSelector((state) => {
    switch (pageType) {
      case PageType.MAIN: {
        return state.DATA.offers;
      }
      case PageType.ROOM: {
        return state.DATA.nearOffers;
      }
      default: {
        return state.DATA.offers;
      }
    }
  });
  const activeOffer = useSelector((state) => state.INTERFACE.activeOffer);
  const city = useSelector((state) => state.INTERFACE.city);

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
