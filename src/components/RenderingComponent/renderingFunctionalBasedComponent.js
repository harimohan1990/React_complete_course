

import React, { useState } from 'react';

function RenderFunction() {
    
      const [counter, setCounter] = useState(0);
    
      const handleIncrement = () => {
        setCounter(counter + 1);
      };
    
      return (
        <div>
          <p>Counter: {counter}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      );
    }
export default RenderFunction