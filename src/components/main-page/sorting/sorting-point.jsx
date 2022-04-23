import React from "react";
import {setSortingType} from "../../../store/reducer/interface/action";
import {fillOffers} from "../../../store/reducer/offers/action";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {sortOffers} from "../../../util.js/sort";


const SortingPoint = ({sortingKey, sortingName = `unknownName`}) => {
  const sortingType = useSelector((state) => state.INTERFACE.sortingType);
  const offers = useSelector((state) => state.OFFERS.offers);

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
