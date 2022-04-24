import React from "react";
import Card from "./card";
import {PageType} from "@src/const";
import {useSelector} from "react-redux";
import {selectPageType} from "@store/reducer/interface/selectors";
import {selectFilteredOffers} from "@store/reducer/offers/selectors";

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
  const pageType = useSelector(selectPageType);

  const offers = useSelector(selectFilteredOffers);

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
