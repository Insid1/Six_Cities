import React, {useState} from "react";
import {connect} from "react-redux";
import SortingPoint from "./sorting-point";
import PropTypes from 'prop-types';
import {SortingType} from "../../../const";


const mapToSortingName = {
  [SortingType.POPULAR]: `Popular`,
  [SortingType.PRICE_LOW_TO_HIGH]: `Price: low to high`,
  [SortingType.PRICE_HIGH_TO_LOW]: `Price: high to low`,
  [SortingType.TOP_RATED]: `Top rated first`,
};

const Sorting = ({sortingType}) => {
  const [isSortingActive, setSortingStatus] = useState(false);

  const svgStyle = {
    transform: isSortingActive ? `rotate(0deg)` : `rotate(180deg)`,
    transition: `transform 200ms ease`,
  };

  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    setSortingStatus(!isSortingActive);
  };
  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    setSortingStatus(!isSortingActive);
  };

  return (
    <form className="places__sorting"
      action="#"
      method="get"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type"
        tabIndex="0"
      >
        {mapToSortingName[sortingType]}
        <svg className="places__sorting-arrow"
          width="7" height="4"
          style={svgStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options
      places__options--custom
      ${isSortingActive ? `places__options--opened` : ``}
      `}
      >
        {Object.entries(mapToSortingName).map(([sortingKey, sortingName]) => (
          <SortingPoint
            key={sortingKey}
            sortingKey={sortingKey}
            sortingName={sortingName}
          />))}
      </ul>

    </form>
  );
};

Sorting.propTypes = {
  sortingType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

export {Sorting};
export default connect(mapStateToProps)(Sorting);
