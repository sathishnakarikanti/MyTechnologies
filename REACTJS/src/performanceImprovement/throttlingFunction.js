import React, { useState, useRef } from 'react';

const ThrottlingFunction = () => {
  const [clickCount, setClickCount] = useState(0);
  const lastRan = useRef(Date.now());
    console.log(lastRan,'lastRan');
  
  // Throttle function
  const throttle = (func, limit) => {
    return (...args) => {
      const now = Date.now();
      console.log(now,'now');
      if (now - lastRan.current >= limit) {
        func(...args);
        lastRan.current = now;
      }
    };
  };

  // Throttled click handler
  const handleClick = throttle(() => {
    setClickCount((prev) => prev + 1);
  }, 2000);

  return (
    <>
      <h1>Throttle function</h1>
      <div>
        <button onClick={handleClick}>Click me (throttled)</button>
        <p>Button clicked: {clickCount} times</p>
      </div>
    </>
  );
};

export default ThrottlingFunction;


let lastRan = Date.now()
const throttle = (func, limit) => {
  return (...args) => {
    let newDate = Date.now();
    if(lastRan.current-newDate > limit){
      func(...args);
      lastRan.current = newDate;
    }
  }
}
throttle(()=> {},2000)