import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>You clicked the button {count} times.</p>
    </div>
  );
}

export default Button;