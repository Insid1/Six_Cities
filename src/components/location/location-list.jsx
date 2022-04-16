import React from "react";
import {connect} from "react-redux";
import Location from "./location";
import PropTypes from 'prop-types';


const LocationList = ({cities}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => <Location key={city + index} city={city}/>)}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
});

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export {LocationList};
export default connect(mapStateToProps)(LocationList);
