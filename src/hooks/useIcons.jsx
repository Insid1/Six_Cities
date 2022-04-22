import {useEffect} from "react";
import L from 'leaflet';

const mapToIconUrl = {
  GENERAL: `./img/pin.svg`,
  ACTIVE: `./img/pin-active.svg`,
};

const ICON_SIZE = [30, 45];

const ICON_OPTION = {
  iconUrl: mapToIconUrl.GENERAL,
  iconSize: ICON_SIZE,
  iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1]],
};

const useIcons = (mapElement, activeOffer, offers) => {

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
      markerLayer = (L.layerGroup(iconGroup).addTo(mapElement));
    }
    return (() => {
      if (markerLayer) {
        markerLayer.remove();
      }
    });
  }, [mapElement, activeOffer]);
};


export default useIcons;
