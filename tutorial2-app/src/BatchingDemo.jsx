// BatchingDemo.jsx
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

function BatchingDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("-");
  const [status, setStatus] = useState("Idle");
  const [products, setProducts] = useState([]);

  // ---------- Render counter ----------
  // useEffect with no dependency list runs once after EVERY render,
  // so it counts how many times the screen was actually updated.
  const renderCount = useRef(0);
  const renderLabel = useRef(null);
  useEffect(() => {
    renderCount.current += 1;
    if (renderLabel.current) {
      renderLabel.current.textContent = renderCount.current;
    }
  });

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // 1. Several different setters in one event → 1 render
  function updateProfile() {
    setName("Priya");
    setAge(25);
    setCity("Chennai");
  }

  // 2. The same setter three times → 1 render, value +3
  function addThree() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // 3. Inside setTimeout → still 1 render (automatic batching, React 18+)
  function updateLater() {
    setTimeout(() => {
      setCount((prev) => prev + 10);
      setStatus("Updated by timer");
    }, 1000);
  }

  // 4. Inside async code (like fetching from an API) → still 1 render per batch
  async function loadProducts() {
    setStatus("Loading..."); // batch 1
    await new Promise((resolve) => setTimeout(resolve, 1500)); // pretend API call
    setProducts(["Teddy Bear", "RC Car", "Puzzle"]); // batch 2
    setStatus("Loaded ✅"); // batch 2 (same render)
  }

  // 5. flushSync → turns batching OFF, so each update renders separately
  function withoutBatching() {
    flushSync(() => setName("Ravi")); // render
    flushSync(() => setAge(30)); // render
    flushSync(() => setCity("Madurai")); // render
  }

  function resetAll() {
    setCount(0);
    setName("Guest");
    setAge(0);
    setCity("-");
    setStatus("Idle");
    setProducts([]);
  }

  return (
    <div>
      <h2 style={{ backgroundColor: "#fff3e0", padding: "10px" }}>
        🔄 Total renders: <span ref={renderLabel}>0</span>
      </h2>
      <p>
        Count: <b>{count}</b> | Name: <b>{name}</b> | Age: <b>{age}</b> | City:{" "}
        <b>{city}</b>
      </p>
      <p>
        Status: <b>{status}</b>
      </p>
      <button onClick={resetAll}>Reset All (1 render)</button>

      <div style={box}>
        <h3>1. Three different setters</h3>
        <button onClick={updateProfile}>Update name, age, city</button>
        <p>
          👉 Renders go up by <b>1</b>, not 3
        </p>
      </div>

      <div style={box}>
        <h3>2. The same setter three times</h3>
        <button onClick={addThree}>+3</button>
        <p>👉 Count +3, renders +1</p>
      </div>

      <div style={box}>
        <h3>3. Inside setTimeout</h3>
        <button onClick={updateLater}>Update after 1 second</button>
        <p>👉 Two updates in the timer, renders +1</p>
      </div>

      <div style={box}>
        <h3>4. Async (API-style)</h3>
        <button onClick={loadProducts}>Load Products</button>
        <ul>
          {products.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p>
          👉 Renders +2: once for "Loading...", once for products + "Loaded"
        </p>
      </div>

      <div style={box}>
        <h3>5. Without batching (flushSync)</h3>
        <button onClick={withoutBatching}>Update with flushSync</button>
        <p>
          👉 Renders go up by <b>3</b>: one for each update
        </p>
      </div>
    </div>
  );
}

export default BatchingDemo;
