import React from "react";
import Card from "./card";
import {PageType} from "@src/const";
import {offersType} from "@src/prop-type";

const chooseClassForList = (type) => {
  switch (type) {
    case PageType.MAIN:
      return `cities__places-list places__list tabs__content`;
    case PageType.ROOM:
      return `near-places__list places__list`;
  }
  return `places__list`;
};

const CardList = ({offers, pageType}) => {

  return (
    <div className={chooseClassForList(pageType)} >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          pageType={pageType}
        />)
      )}
    </div>
  );
};

CardList.propTypes = {
  offers: offersType
};

export {CardList};
export default CardList;
