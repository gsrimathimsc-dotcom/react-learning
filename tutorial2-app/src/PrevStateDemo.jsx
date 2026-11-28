// PrevStateDemo.jsx
import { useState, useEffect } from "react";

function PrevStateDemo() {
  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // ---------- 1. Number: counter ----------
  const [count, setCount] = useState(0);

  function addFive() {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1); // runs 5 times, each with the latest value
    }
  }

  // ---------- 2. Boolean: toggle ----------
  const [isDark, setIsDark] = useState(false);

  // ---------- 3. Array: add, remove, update ----------
  const [toys, setToys] = useState([
    { id: 1, name: "Teddy Bear" },
    { id: 2, name: "RC Car" },
  ]);
  const [nextId, setNextId] = useState(3);

  function addToy() {
    setToys((prev) => [...prev, { id: nextId, name: "Toy " + nextId }]);
    setNextId((prev) => prev + 1);
  }

  function removeToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function renameToy(id) {
    setToys((prev) =>
      prev.map((toy) =>
        toy.id === id ? { ...toy, name: toy.name + " ⭐" } : toy,
      ),
    );
  }

  // ---------- 4. Object: update one property ----------
  const [user, setUser] = useState({ name: "Srimathi", points: 100 });

  function addPoints() {
    setUser((prev) => ({ ...prev, points: prev.points + 50 }));
    //          ↑ ( ) around { } is needed to return an object from an arrow function
  }

  // ---------- 5. Cart: quantity in an array of objects ----------
  const [cart, setCart] = useState([
    { id: 1, title: "Teddy Bear", price: 499, qty: 1 },
    { id: 2, title: "Puzzle Set", price: 349, qty: 2 },
  ]);

  function changeQty(id, amount) {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, qty: item.qty + amount } : item,
          )
          .filter((item) => item.qty > 0), // remove the item when its qty reaches 0
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ---------- 6. Timer: prev is REQUIRED here ----------
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1); // ✅ with setSeconds(seconds + 1) it would get stuck at 1
    }, 1000);
    return () => clearInterval(timer); // stop the timer when it isn't needed
  }, [running]);

  // ---------- UI ----------
  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "10px",
      }}
    >
      {/* 1 */}
      <div style={box}>
        <h3>1. Counter (number)</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>{" "}
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>{" "}
        <button onClick={addFive}>+5 (loop)</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* 2 */}
      <div style={box}>
        <h3>2. Toggle (boolean)</h3>
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* 3 */}
      <div style={box}>
        <h3>3. Toy List (array)</h3>
        <button onClick={addToy}>➕ Add Toy</button>
        <ul>
          {toys.map((toy) => (
            <li key={toy.id}>
              {toy.name} <button onClick={() => renameToy(toy.id)}>⭐</button>{" "}
              <button onClick={() => removeToy(toy.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* 4 */}
      <div style={box}>
        <h3>4. User Points (object)</h3>
        <p>
          {user.name} has {user.points} points
        </p>
        <button onClick={addPoints}>+50 Points</button>
      </div>

      {/* 5 */}
      <div style={box}>
        <h3>5. Shopping Cart (array of objects)</h3>
        {cart.length === 0 && <p>Cart is empty</p>}
        {cart.map((item) => (
          <p key={item.id}>
            {item.title} - ₹{item.price} ×{" "}
            <button onClick={() => changeQty(item.id, -1)}>-</button> {item.qty}{" "}
            <button onClick={() => changeQty(item.id, 1)}>+</button> = ₹
            {item.price * item.qty}
          </p>
        ))}
        <p>
          <b>Total: ₹{total}</b>
        </p>
      </div>

      {/* 6 */}
      <div style={box}>
        <h3>6. Timer (setInterval)</h3>
        <p>⏱ {seconds} seconds</p>
        <button onClick={() => setRunning((prev) => !prev)}>
          {running ? "Pause" : "Start"}
        </button>{" "}
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
}

export default PrevStateDemo;
