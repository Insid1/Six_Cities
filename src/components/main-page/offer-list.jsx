import React, {useState} from "react";
import {Card} from "../card/card";
import {offersType} from "../../prop-type";


const OfferList = ({offers}) => {
  const [, setActiveOffer] = useState(null);
  const handleMouseEnter = (id) => {
    setActiveOffer(id);
  };
  const handleMouseLeave = () => {
    setActiveOffer(null);
  };
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          mouseEnterHandler={handleMouseEnter}
          mouseLeaveHandler={handleMouseLeave}
        />)
      )}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType,
};

export {OfferList};
