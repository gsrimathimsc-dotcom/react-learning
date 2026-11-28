// WrongVsRight.jsx
import { useReducer, useState } from "react";

// A pretend "expensive" function
function createToyList() {
  console.log("⚙️ createToyList() ran - building 1000 toys...");
  const toys = [];
  for (let i = 1; i <= 1000; i++) {
    toys.push({ id: i, name: "Toy " + i });
  }
  return { toys };
}

function reducer(state) {
  return state; // not important for this demo
}

// ❌ WRONG: the function is CALLED on every render
function WrongWay() {
  const [state] = useReducer(reducer, createToyList()); // () → called each time
  const [text, setText] = useState("");

  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px 0" }}>
      <h4 style={{ color: "red" }}>
        ❌ Wrong: useReducer(reducer, createToyList())
      </h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>
        {state.toys.length} toys. Type and watch the console: it runs on EVERY
        key.
      </p>
    </div>
  );
}

// ✅ RIGHT: the function is PASSED, so React calls it once
function RightWay() {
  const [state] = useReducer(reducer, null, createToyList); // no () → called once
  const [text, setText] = useState("");

  return (
    <div
      style={{ border: "2px solid green", padding: "10px", margin: "10px 0" }}
    >
      <h4 style={{ color: "green" }}>
        ✅ Right: useReducer(reducer, null, createToyList)
      </h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>
        {state.toys.length} toys. Type and watch the console: it does NOT run
        again.
      </p>
    </div>
  );
}

function WrongVsRight() {
  return (
    <>
      <WrongWay />
      <RightWay />
    </>
  );
}

export default WrongVsRight;
