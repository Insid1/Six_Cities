import {useState, useEffect} from "react";
import L from 'leaflet';
import {mapToCityLocation} from "../const";


const LAYER_OPTION = [
  `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  {attribution: `© OpenStreetMap contributors © CARTO`}
];

const MAP_OPTION = {
  center: [55.7797, 37.50353], // cords for Moscow
  zoom: 12,
  marker: true,
  scrollWheelZoom: false,
};


const useMap = (mapRef, currCity, offers) => {
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
  }, [offers, currCity, mapRef]);

  return mapElement;
};


export default useMap;
