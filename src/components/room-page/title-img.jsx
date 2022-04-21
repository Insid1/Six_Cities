import React from "react";
import PropTypes from 'prop-types';


const TitleImg = ({imgSrc}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image"
        src={imgSrc}
        alt="Photo studio" />
    </div>
  );
};

TitleImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export {TitleImg};
export default TitleImg;
