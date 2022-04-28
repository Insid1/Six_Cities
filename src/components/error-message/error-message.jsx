import React from 'react';

const ErrorMessage = () => {
  return (
    <div style={{
      color: `red`,
      padding: ` 10px`,
      textAlign: `center`,
      fontWeight: `700`,
    }}>Unable to connect to server</div>
  );
};

export default ErrorMessage;
