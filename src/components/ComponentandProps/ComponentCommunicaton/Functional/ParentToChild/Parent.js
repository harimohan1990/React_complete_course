import React, { useState } from 'react';

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <ChildComponent message={message} updateMessage={updateMessage} />
  );
}

export default ParentComponent