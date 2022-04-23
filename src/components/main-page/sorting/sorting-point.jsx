import React from "react";
import {setSortingType} from "../../../store/reducer/interface/action";
import {fillOffers} from "../../../store/reducer/offers/action";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {sortOffers} from "../../../util.js/sort";
import {getSortingType} from "../../../store/reducer/interface/selectors";
import {getCurrentOffers} from "../../../store/reducer/offers/selectors";


const SortingPoint = ({sortingKey, sortingName = `unknownName`}) => {
  const sortingType = useSelector(getSortingType);
  const offers = useSelector(getCurrentOffers);

  const dispatch = useDispatch();

  const handleOnClick = (evt) => {
    evt.preventDefault();
    dispatch(setSortingType(sortingKey));
    dispatch(fillOffers(sortOffers(offers, sortingKey)));
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
