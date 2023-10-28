import React, { useState } from 'react';

const UsingTernaryOperator = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    isLoggedin ? (
      <div><button onClick={() => setIsLoggedin(false)}>Login</button></div>
    ) : (
      <div><button onClick={() => setIsLoggedin(true)}>Logout</button></div>
    )
  );
};

export default UsingTernaryOperator;
