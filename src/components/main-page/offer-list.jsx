import React, {useState, useCallback} from "react";
import {Card} from "../card/card";
import {offersType} from "../../prop-type";


const OfferList = ({offers}) => {
  const [currElement, func] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    console.log(item);
  });
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={handleMouseEnter}
        />)
      )}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType
};

export {OfferList};
