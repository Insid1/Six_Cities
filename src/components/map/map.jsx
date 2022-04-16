import React from 'react';
import L from 'leaflet';
import {useState, useRef, useEffect} from 'react';
import {offersType} from '../../prop-type';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {PageType} from '../../const';
import {connect} from 'react-redux';
const IconSize = [30, 45];
const IconUrl = {
  GENERAL: `./img/pin.svg`,
  ACTIVE: `./img/pin-active.svg`,

};


const LAYER_PARAM = [
  `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  {attribution: `© OpenStreetMap contributors © CARTO`}
];


const chooseClassForMap = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__map map`;
    case PageType.ROOM:
      return `property__map map`;
  }
  return `map`;
};


const Map = ({offers, activeOffer = ``, type}) => {
  const mapRef = useRef();
  const [mapElement, setMapElement] = useState(null);
  const {lat: cityLat, lng: cityLng, zoom} = offers[0].city.location;

  useEffect(() => {
    const mapParam = {
      center: [cityLat, cityLng],
      zoom,
      zoomControl: false,
      marker: true,
    };
    const map = L.map(mapRef.current, mapParam);
    L.tileLayer(...LAYER_PARAM).addTo(map);
    setMapElement(map);

    return (() => {
      map.remove();
      setMapElement(null);
    });
  }, [offers]);

  useEffect(() => {
    let markerLayer;
    if (mapElement) {
      const iconGroup = offers.map((offer) => {
        const iconParam = {
          iconUrl: offer.id === activeOffer ? IconUrl.ACTIVE : IconUrl.GENERAL,
          iconSize: IconSize,
          iconAnchor: [IconSize[0] / 2, IconSize[1]],
        };
        const {lat, lng} = offer.location;
        const icon = L.icon(iconParam);
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
    <section ref={mapRef} className={chooseClassForMap(type)} style={{height: `530px`}} ></section>
  );
};

Map.propTypes = {
  offers: offersType,
  activeOffer: PropTypes.oneOfType([PropTypes.string]),
  type: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
