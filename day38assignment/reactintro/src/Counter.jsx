import React, { useState } from 'react';

  // Create a functional component called Counter. 
  function Counter() {
  const [count, setCount] = useState(0); // Inside the component, use the useState hook to create a state variable called count with an initial value of 0 and a function called setCount to update the state.

  // Implement two functions called increment and decrement inside the Counter component. 
  function increment() {
    setCount(count + 1); // The increment function should increase the count value by 1, and the decrement function should decrease the count value by 1. Use the setCount function to update the count value.
  }

  function decrement() {
    setCount(count - 1); // The increment function should increase the count value by 1, and the decrement function should decrease the count value by 1. Use the setCount function to update the count value.
  }
  // In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the counter. Attach the increment and decrement functions as event handlers for the onClick event of the respective buttons.
    return (
    <div>
      <p>Clicked {count} times</p>
      <button id="buttonbutton" onClick={increment}>
        Increment +
      </button>
      <button id="buttonbutton" onClick={decrement}>
        Decrement -
      </button>
    </div>
  );
}

export default Counter;