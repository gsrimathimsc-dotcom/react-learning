// ClickEvents.jsx
import { useState } from "react";

function ClickEvents() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // 1. Simple handler
  function handleClick() {
    setCount(count + 1);
  }

  // 2. Handler that takes an argument
  function greet(name) {
    setMessage("Hello, " + name + "!");
  }

  // 3. Handler that uses the event object (e)
  function showButtonText(e) {
    setMessage("You clicked the button: " + e.target.textContent);
  }

  // 4. Double click
  function handleDoubleClick() {
    setMessage("❤️ Double clicked! Added to wishlist");
  }

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <button onClick={handleClick}>Clicked {count} times</button>{" "}
      <button onClick={() => greet("Srimathi")}>Greet</button>{" "}
      <button onClick={showButtonText}>Show My Text</button>{" "}
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      <p>
        <b>Message:</b> {message}
      </p>
      {/* 5. Event bubbling: a click on the child also reaches the parent */}
      <div
        onClick={() => setMessage("Parent box clicked")}
        style={{ backgroundColor: "#e3f2fd", padding: "15px" }}
      >
        Parent box{" "}
        <button
          onClick={(e) => {
            e.stopPropagation(); // stops the click reaching the parent
            setMessage("Only the child button clicked");
          }}
        >
          Child Button
        </button>
      </div>
    </div>
  );
}

export default ClickEvents;
