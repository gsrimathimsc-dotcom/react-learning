// StateUpdateDemo.jsx
import { useState } from "react";

function StateUpdateDemo() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState("");
  const [toys, setToys] = useState(["Teddy Bear"]);

  console.log("🔄 Component rendered. count =", count); // watch in the console (F12)

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // 1. Not immediate
  function showOldValue() {
    setCount(count + 1);
    setLog(`Right after setCount, count is still: ${count}`);
  }

  // 2. Same old value → only +1
  function addThreeWrong() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  // 3. Updater function → +3
  function addThreeRight() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // 4. Array: mutate (wrong) vs copy (right)
  function addToyWrong() {
    toys.push("Ball");
    setToys(toys); // same array → no re-render
  }

  function addToyRight() {
    setToys([...toys, "Ball " + toys.length]); // new array → re-render
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <div style={box}>
        <h3>1. Updates are not immediate</h3>
        <button onClick={showOldValue}>+1 and show the value</button>
        <p>{log}</p>
      </div>

      <div style={box}>
        <h3>2 & 3. Multiple updates</h3>
        <button onClick={addThreeWrong}>❌ +3 (wrong way)</button>{" "}
        <button onClick={addThreeRight}>✅ +3 (updater function)</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={box}>
        <h3>4. Updating an array</h3>
        <button onClick={addToyWrong}>❌ push (no update)</button>{" "}
        <button onClick={addToyRight}>✅ spread copy</button>
        <ul>
          {toys.map((toy, i) => (
            <li key={i}>{toy}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StateUpdateDemo;
