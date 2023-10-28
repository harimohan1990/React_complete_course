import React, { useState } from 'react';

const ShortCircuit = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div>
      {isLoggedin && <button>Login</button>}
      <br />
      <br />
      {isLoggedin && <button>Logout</button>}
    </div>
  );
};

export default ShortCircuit;
