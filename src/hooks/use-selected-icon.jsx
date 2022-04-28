import L from 'leaflet';
import {useEffect} from "react";
import {PageType} from "@src/const";

const mapToIconUrl = {
  CURRENT: `./img/transparent-circle.svg`,
};

const ICON_SIZE = [130, 130];

const ICON_OPTION = {
  iconUrl: mapToIconUrl.CURRENT,
  iconSize: ICON_SIZE,
};

const useSelectedIcon = (pageType, selectedOffer, mapElement) => {

  useEffect(() => {
    if (pageType === PageType.ROOM && mapElement && selectedOffer.id) {
      const {lat, lng} = selectedOffer.location;
      const icon = L.icon(ICON_OPTION);
      L.marker([lat, lng], {icon}).addTo(mapElement);

    }
  }, [selectedOffer, mapElement, pageType]);
};

export default useSelectedIcon;
