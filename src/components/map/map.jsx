import React from 'react';
import {useRef} from 'react';
import {offersType} from '../../prop-type';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import {connect} from 'react-redux';
import useMap from '../../hooks/usemap';
import useIcons from '../../hooks/useIcons';


const chooseClassForMap = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__map map`;
    case PageType.ROOM:
      return `property__map map`;
  }
  return `map`;
};

const Map = ({offers, activeOffer, type, currCity}) => {
  const mapRef = useRef();
  const mapElement = useMap(mapRef, currCity, offers);
  useIcons(mapElement, activeOffer, offers);

  return (
    <section className={chooseClassForMap(type)}
      ref={mapRef}
    />
  );
};

Map.propTypes = {
  offers: offersType,
  activeOffer: PropTypes.number,
  type: PropTypes.string.isRequired,
  currCity: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  activeOffer: DATA.activeOffer,
  currCity: DATA.city,
});

export {Map};
export default connect(mapStateToProps)(Map);
