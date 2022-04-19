import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <span>Loading...</span>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
