import React, { useEffect } from 'react';

function ChildComponent({ count, setCount }) {
  useEffect(() => {
    // You can use count and setCount here.
    
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default ChildComponent
