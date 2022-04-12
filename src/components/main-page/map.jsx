import React from 'react';
import leaflet from 'leaflet';
import {useRef, useEffect} from 'react';
import {offersType} from '../../prop-type';
import '../../../node_modules/leaflet/dist/leaflet.css';

const iconSize = [30, 45];

const Map = ({offers}) => {
  const {lat: cityLat, lng: cityLng, zoom} = offers[0].city.location;
  const cityCords = [cityLat, cityLng];
  const mapRef = useRef();

  useEffect(() => {
    const mapElement = mapRef.current;
    const iconParametr = {
      iconUrl: `./img/pin.svg`,
      iconSize,
      iconAnchor: [iconSize[0] / 2, iconSize[1]],
    };
    const mapParametr = {
      center: cityCords,
      zoom,
      zoomControl: false,
      marker: true,
    };
    const layerParametr = [
      `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      {attribution: `© OpenStreetMap contributors © CARTO`}
    ];

    const addIcons = () => {
      const icon = leaflet.icon(iconParametr);
      offers.forEach((offer) => {
        const {lat, lng} = offer.location;
        leaflet.marker([lat, lng], {icon}).addTo(map);
      });
    };

    const map = leaflet.map(mapElement, mapParametr);
    map.setView(cityCords, zoom);
    leaflet.tileLayer(...layerParametr).addTo(map);
    addIcons();

    return (() => {
      mapElement.remove();
    });
  });
  return (
    <section ref={mapRef} className="cities__map" style={{height: `530px`}} ></section>
  );
};

Map.propTypes = {
  offers: offersType
};

export {Map};
