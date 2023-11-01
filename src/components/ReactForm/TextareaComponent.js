import React, { useState } from 'react';

function TextareaComponent() {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        rows={5} 
        cols={40} 
      />
      <p>Textarea Value: {textareaValue}</p>
    </div>
  );
}

export default TextareaComponent;
