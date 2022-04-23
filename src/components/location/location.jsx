import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCity, fillOffers} from "../../store/action";
import {capitalize} from "../../util.js/common";
import PropTypes from 'prop-types';
import {filterByCity} from "../../util.js/filter";

const Location = ({city}) => {

  const currentCity = useSelector((state) => state.INTERFACE.city);
  const allOffers = useSelector((state) => state.DATA.allOffers);

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();

    dispatch(setCity(city));
    dispatch(fillOffers(filterByCity(allOffers, city)));
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
