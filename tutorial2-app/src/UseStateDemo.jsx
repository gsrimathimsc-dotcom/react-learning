// UseStateDemo.jsx
import { useState } from "react";

function UseStateDemo() {
  // 1. Number
  const [count, setCount] = useState(0);

  // 2. Boolean (true / false)
  const [isLiked, setIsLiked] = useState(false);

  // 3. String (text input)
  const [name, setName] = useState("");

  // 4. Array
  const [toys, setToys] = useState(["Teddy Bear", "RC Car"]);

  // 5. Object
  const [user, setUser] = useState({ name: "Srimathi", city: "Chennai" });

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  return (
    <div>
      {/* 1. Number: counter */}
      <div style={box}>
        <h3>1. Counter (number)</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>{" "}
        <button onClick={() => setCount(count - 1)}>-</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* 2. Boolean: toggle */}
      <div style={box}>
        <h3>2. Like Button (boolean)</h3>
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      {/* 3. String: input */}
      <div style={box}>
        <h3>3. Text Input (string)</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <p>Hello, {name || "Guest"}!</p>
      </div>

      {/* 4. Array: add an item */}
      <div style={box}>
        <h3>4. Toy List (array)</h3>
        <button onClick={() => setToys([...toys, "New Toy " + (toys.length + 1)])}>
          Add Toy
        </button>
        <ul>
          {toys.map((toy) => (
            <li key={toy}>{toy}</li>
          ))}
        </ul>
      </div>

      {/* 5. Object: update one property */}
      <div style={box}>
        <h3>5. User (object)</h3>
        <p>{user.name} lives in {user.city}</p>
        <button onClick={() => setUser({ ...user, city: "Coimbatore" })}>
          Move to Coimbatore
        </button>
      </div>
    </div>
  );
}

export default UseStateDemo;