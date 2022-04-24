import React from "react";
import {setSortingType} from "@reducer/interface/action";
import {selectSortingType} from "@reducer/interface/selectors";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";


const SortingPoint = ({sortingKey, sortingName = `unknownName`}) => {
  const sortingType = useSelector(selectSortingType);

  const dispatch = useDispatch();

  const handleOnClick = (evt) => {
    evt.preventDefault();
    dispatch(setSortingType(sortingKey));
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
};


export {SortingPoint};
export default SortingPoint;
