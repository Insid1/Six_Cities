import React from 'react';
import TitleImg from '../title-img';
import PropTypes from 'prop-types';

const RoomGalery = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, 6).map((imgSrc) => <TitleImg
          key={imgSrc}
          imgSrc={imgSrc}
        />)}
      </div>
    </div>
  );
};

RoomGalery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default RoomGalery;
