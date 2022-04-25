import React from "react";
import {hostType} from "@src/prop-type";
import PropTypes from 'prop-types';


const HostInfo = ({host, description}) => {
  const {avatarUrl, isPro, name} = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatarUrl} alt="Host avatar" width="74" height="74" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro
          &&
          <span className="property__user-status">
                    Pro
          </span>}

      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

HostInfo.propTypes = {
  host: hostType,
  description: PropTypes.string.isRequired,
};

export {HostInfo};
export default HostInfo;
