import React from "react";
import {setSortingType} from "@reducer/interface/action";
import {getSortingType} from "@reducer/interface/selectors";
import {fillOffers} from "@reducer/offers/action";
import {sortOffers} from "@util/sort";
import {getCurrentOffers} from "@reducer/offers/selectors";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";


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
