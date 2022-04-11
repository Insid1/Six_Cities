import React from "react";
import {FavoriteCard} from "./favorite-card";
import {offersType} from "../../prop-type";

const FavoritesList = ({offers}) => {
  return (
    <>
      {offers.map((offer) => (<FavoriteCard
        offer={offer}
        key={offer.id} />))}
    </>
  );
};

FavoritesList.propTypes = {
  offers: offersType
};

export {FavoritesList};
