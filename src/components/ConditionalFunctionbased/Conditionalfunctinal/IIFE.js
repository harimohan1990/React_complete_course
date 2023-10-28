import React, { useState } from "react";

const IIFE = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <h1>
        This is a Demo showing several ways to implement Conditional Rendering in React.
      </h1>
      {(() => {
        if (isLoggedIn) {
          return <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
        } else {
          return <button onClick={() => setIsLoggedIn(true)}>Login</button>;
        }
      })()}
    </div>
  );
};

export default IIFE;
