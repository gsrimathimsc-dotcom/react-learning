import { useState } from "react";

// 1. Component as an arrow function
const ArrowDemo = () => {
  const [message, setMessage] = useState("");

  // 2. Event handler as an arrow function
  const showMessage = () => {
    setMessage("Arrow function called!");
  };

  // 3. Short arrow function (one line, returns automatically)
  const add = (a, b) => a + b;

  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h2>Arrow Function Demo</h2>

      <button onClick={showMessage}>Show Message</button>
      <p>{message}</p>

      <p>5 + 3 = {add(5, 3)}</p>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrowDemo;