import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import PropTypes from 'prop-types';


const SortingPoint = ({sortingKey, sortingName = `unknownName`, sortingType, setSortingType}) => {
  const handleOnClick = (evt) => {
    evt.preventDefault();
    setSortingType(sortingKey);
  };

  return (
    <li className={`places__option ${
      (sortingType === sortingKey ? `places__option--active` : ``)
    }`}
    tabIndex="0"
    onClick={handleOnClick}>{sortingName}</li>
  );
};

SortingPoint.propTypes = {
  sortingKey: PropTypes.string.isRequired,
  sortingName: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired,
  setSortingType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  setSortingType(sortingType) {
    dispatch(ActionCreator.setSortingType(sortingType));
  }
});

export {SortingPoint};
export default connect(mapStateToProps, mapDispatchToProps)(SortingPoint);
