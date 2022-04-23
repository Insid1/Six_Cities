import React from 'react';
import {useRef} from 'react';
import PropTypes from 'prop-types';
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

const Map = ({type}) => {
  const offers = useSelector((state) => {
    switch (type) {
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

  const mapRef = useRef();
  const {activeOffer, city} = useSelector((state) => state.DATA);
  const mapElement = useMap(mapRef, city, offers);
  useIcons(mapElement, activeOffer, offers);

  return (
    <section className={chooseClassForMap(type)}
      ref={mapRef}
    />
  );
};

Map.propTypes = {
  type: PropTypes.string.isRequired,
};


export {Map};
export default Map;
