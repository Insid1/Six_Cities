import React from "react";
import {setCity, setSortingType} from "@reducer/interface/action";
import {capitalize} from "@src/util/common";
import {selectCity} from "@reducer/interface/selectors";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {SortingType} from "@src/const";


const Location = ({city}) => {

  const currentCity = useSelector(selectCity);

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(setCity(city));
    dispatch(setSortingType(SortingType.POPULAR));
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
