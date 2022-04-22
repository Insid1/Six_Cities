import React from "react";
import Card from "../card/card";
import PropTypes from 'prop-types';
import {PageType} from "../../const";
import {useSelector} from "react-redux";

const chooseClassForList = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__places-list places__list tabs__content`;
    case PageType.ROOM:
      return `near-places__list places__list`;
  }
  return `places__list`;
};

const CardList = ({type}) => {
  const offers = useSelector((state) => state.DATA.offers);
  return (
    <div className={chooseClassForList(type)} >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          pageType={type}
        />)
      )}
    </div>
  );
};

CardList.propTypes = {
  type: PropTypes.string.isRequired,
};

export {CardList};
export default CardList;
