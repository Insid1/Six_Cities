import React from 'react';
import L from 'leaflet';
import {useState, useRef, useEffect} from 'react';
import {offersType} from '../../prop-type';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import {connect} from 'react-redux';
import {mapToCityLocation} from '../../const';

const mapToIconUrl = {
  GENERAL: `./img/pin.svg`,
  ACTIVE: `./img/pin-active.svg`,

};

const ICON_SIZE = [30, 45];

const LAYER_OPTION = [
  `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  {attribution: `© OpenStreetMap contributors © CARTO`}
];

const MAP_OPTION = {
  center: [55.7797, 37.50353], // cords for Moscow
  zoom: 12,
  zoomControl: false,
  marker: true,
};

const ICON_OPTION = {
  iconUrl: mapToIconUrl.GENERAL,
  iconSize: ICON_SIZE,
  iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1]],
};


const chooseClassForMap = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__map map`;
    case PageType.ROOM:
      return `property__map map`;
  }
  return `map`;
};

const Map = ({offers, activeOffer = ``, type, currCity}) => {
  const mapRef = useRef();
  const [mapElement, setMapElement] = useState(null);

  useEffect(() => {

    const map = L.map(mapRef.current, {
      ...MAP_OPTION,
      center: mapToCityLocation[currCity].location
    });
    L.tileLayer(...LAYER_OPTION).addTo(map);
    setMapElement(map);

    return (() => {
      map.remove();
      setMapElement(null);
    });
  }, [offers, currCity]);

  useEffect(() => {
    let markerLayer;
    if (mapElement) {
      const iconGroup = offers.map((offer) => {
        const {lat, lng} = offer.location;
        const icon = L.icon({
          ...ICON_OPTION,
          iconUrl: (offer.id === activeOffer)
            ?
            mapToIconUrl.ACTIVE
            :
            mapToIconUrl.GENERAL
        });

        return L.marker([lat, lng], {icon});
      });
      markerLayer = L.layerGroup(iconGroup).addTo(mapElement);
    }
    return (() => {
      if (markerLayer) {
        markerLayer.remove();
      }
    });
  }, [mapElement, activeOffer]);

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

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
  currCity: state.city,
});

export {Map};
export default connect(mapStateToProps)(Map);
