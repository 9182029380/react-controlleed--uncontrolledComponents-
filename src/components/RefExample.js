import React, { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Entered value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h3>Enter Your Name</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
};

export default RefExample;
