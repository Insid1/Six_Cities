import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCity} from "../../store/action";
import {capitalize} from "../../util.js/common";
import PropTypes from 'prop-types';


const Location = ({city}) => {

  const currentCity = useSelector((state) => state.DATA.city);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(setCity(city));
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
