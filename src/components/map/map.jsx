import React from 'react';
import {useRef} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import useMap from '../../hooks/usemap';
import useIcons from '../../hooks/useIcons';
import {useSelector} from 'react-redux';
import {selectActiveOffer, selectCity} from '../../store/reducer/interface/selectors';
import {offersType} from '@src/prop-type';

const chooseClassForMap = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__map map`;
    case PageType.ROOM:
      return `property__map map`;
  }
  return `map`;
};

const Map = ({offers, pageType}) => {
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

Map.propTypes = {
  offers: offersType
};


export {Map};
export default Map;
