import React from 'react';

function ButtonComponent() {
  // Define a custom event handler function
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ButtonComponent;
