import React, { useState } from 'react';

import 
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <ChildComponent count={count} setCount={setCount} />
  );
}

export default ParentComponent