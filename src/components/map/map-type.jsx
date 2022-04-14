import React from 'react';

const chooseMapType = (type) => {
  switch (type) {
    case MapType.MAIN:
      return (
        <section className="cities__map map" style={{height: `530px`}} ></section>
      );
  }

  return (
    <section className="map" style={{height: `530px`}} ></section>
  );
};

const MapType = ({type}) => {
  return chooseMapType(type);
};
