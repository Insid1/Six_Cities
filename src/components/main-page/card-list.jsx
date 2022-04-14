import React from "react";
import {Card} from "../card/card";
import {offersType} from "../../prop-type";
import PropTypes from 'prop-types';
import {PageType} from "../../const";

const chooseClassForList = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__places-list places__list tabs__content`;
    case PageType.ROOM:
      return `near-places__list places__list`;
  }
  return `places__list`;
};

const CardList = ({offers, onMouseEnter, onMouseLeave, type}) => {

  return (
    <div className={chooseClassForList(type)} >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          pageType={type}
        />)
      )}
    </div>
  );
};

CardList.propTypes = {
  offers: offersType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export {CardList};
