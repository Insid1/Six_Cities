import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCity} from "@reducer/interface/action";
import {fillOffers} from "@reducer/offers/action";
import {capitalize} from "@src/util/common";
import PropTypes from 'prop-types';
import {filterByCity} from "@util/filter";
import {getCity} from "@reducer/interface/selectors";
import {getAllOffers} from "@reducer/offers/selectors";


const Location = ({city}) => {

  const currentCity = useSelector(getCity);
  const allOffers = useSelector(getAllOffers);

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();

    dispatch(setCity(city));
    const filtredOffers = filterByCity(allOffers, city);
    dispatch(fillOffers(filtredOffers));
  };

  return (
    <li className="locations__item"
      onClick={handleClick}>
      <a className={(currentCity === city) ?
        `locations__item-link tabs__item tabs__item--active` :
        `locations__item-link tabs__item`} href="#">
        <span>{capitalize(city)}</span>
      </a>
    </li>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};


export {Location};
export default Location;
