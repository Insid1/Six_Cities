import React from 'react';
import leaflet, {layerGroup} from 'leaflet';
import {useState, useRef, useEffect} from 'react';
import {offersType} from '../../prop-type';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';

const IconSize = [30, 45];
const IconUrl = {
  GENERAL: `./img/pin.svg`,
  ACTIVE: `./img/pin-active.svg`,

};

const useMap = (offers, mapRef) => {
  const [mapElement, setMapElement] = useState(null);

  useEffect(() => {
    const container = mapRef.current;
    const {lat: cityLat, lng: cityLng, zoom} = offers[0].city.location;

    const createMap = () => {
      const mapParam = {
        center: [cityLat, cityLng],
        zoom,
        zoomControl: false,
        marker: true,
      };
      const layerParam = [
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `© OpenStreetMap contributors © CARTO`}
      ];

      const map = leaflet.map(container, mapParam);

      map.setView([cityLat, cityLng], zoom);
      leaflet.tileLayer(...layerParam).addTo(map);
      setMapElement(map);
    };

    createMap(container);

    return (() => {
      container.remove();
      setMapElement(null);
    });

  }, [offers, mapRef]);

  return mapElement;
};
const useIcons = (offers, mapElement, activeOffer) => {
  const [markersLayer, setMarkersLayer] = useState(null);

  useEffect(() => {
    const getIconsGroup = () => {
      const layerMarker = offers.map((offer) => {
        const iconParam = {
          iconUrl: offer.id === activeOffer ? IconUrl.ACTIVE : IconUrl.GENERAL,
          iconSize: IconSize,
          iconAnchor: [IconSize[0] / 2, IconSize[1]],
        };
        const icon = leaflet.icon(iconParam);
        const {lat, lng} = offer.location;
        return leaflet.marker([lat, lng], {icon});
      });
      return layerGroup(layerMarker);
    };
    const icons = getIconsGroup();
    if (mapElement) {
      icons.addTo(mapElement);

      if (markersLayer) {
        mapElement.removeLayer(markersLayer);
      }

      setMarkersLayer(icons);
    }
  }, [offers, mapElement, activeOffer]);
};

const Map = ({offers, activeOffer = {}}) => {
  const mapRef = useRef();

  const mapElement = useMap(offers, mapRef);
  useIcons(offers, mapElement, activeOffer);

  return (
    <section ref={mapRef} className="cities__map" style={{height: `530px`}} ></section>
  );
};

Map.propTypes = {
  offers: offersType,
  activeOffer: PropTypes.oneOfType([PropTypes.string]),
};

export {Map};
