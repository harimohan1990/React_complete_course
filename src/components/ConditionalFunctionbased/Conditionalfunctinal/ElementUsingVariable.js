import React, { useState } from 'react';

const ElementUsingVariable = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  let buttonAuth;

  if (isLoggedin) {
    buttonAuth = <button onClick={() => setIsLoggedin(false)}>Login</button>;
  } else {
    buttonAuth = <button onClick={() => setIsLoggedin(true)}>Logout</button>;
  }

  return buttonAuth;
};

export default ElementUsingVariable;
