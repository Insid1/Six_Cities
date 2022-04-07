import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Error 404 occured.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </>
  );
};

export default NotFound;
