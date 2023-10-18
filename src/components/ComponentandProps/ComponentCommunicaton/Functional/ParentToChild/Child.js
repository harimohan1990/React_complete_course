import React from 'react';

function ChildComponent(props) {
  const handleClick = () => {
    props.updateMessage("Hello from Child");
  };

  return (
    <div>
      <p>{props.message}</p>
      <button onClick={handleClick}>Update Message</button>
    </div>
  );
}

export default ChildComponent
