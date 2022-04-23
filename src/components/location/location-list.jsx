import React from "react";
import Location from "./location";
import {useSelector} from "react-redux";
import {getCities} from "../../store/reducer/offers/selectors";


const LocationList = () => {
  const cities = useSelector(getCities);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => <Location key={city + index} city={city}/>)}
      </ul>
    </section>
  );
};


export {LocationList};
export default LocationList;
