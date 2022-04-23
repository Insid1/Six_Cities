import React from "react";
import Card from "./card";
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

const CardList = () => {
  const pageType = useSelector((state) =>state.INTERFACE.pageType);
  const offers = useSelector((state) => {
    switch (pageType) {
      case PageType.MAIN: {
        return state.DATA.offers;
      }
      case PageType.ROOM: {
        return state.DATA.nearOffers;
      }
      default: {
        return state.DATA.offers;
      }
    }
  });
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

export {CardList};
export default CardList;
