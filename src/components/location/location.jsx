import React from "react";
import {connect} from "react-redux";
import {setCity} from "../../store/action";
import {capitalize} from "../../util.js/common";
import PropTypes from 'prop-types';


const Location = ({city, currentCity, setActiveCity}) => {

  const handleClick = (evt) => {
    evt.preventDefault();
    setActiveCity(city);
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
const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCity(city) {
    dispatch(setCity(city));
  }
});

Location.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  setActiveCity: PropTypes.func.isRequired,
};


export {Location};
export default connect(mapStateToProps, mapDispatchToProps)(Location);
