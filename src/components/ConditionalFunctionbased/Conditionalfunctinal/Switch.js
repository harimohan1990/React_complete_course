import React, { useState } from 'react';

const Switch = () => {
  const [isLogging, setIsLogging] = useState(true);

  const switchcase = () => {
    switch (isLogging) {
      case true:
        return <button onClick={() => setIsLogging(false)}>Login</button>;

      case false:
        return <button onClick={() => setIsLogging(true)}>Logout</button>;

      default:
        return null;
    }
  };

  return <div>{switchcase()}</div>;
};

export default Switch;
