import React from "react";
import {Card} from "../card/card";
import {offersType} from "../../prop-type";
import PropTypes from 'prop-types';


const OfferList = ({offers, onMouseEnter, onMouseLeave}) => {

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />)
      )}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,

};

export {OfferList};
