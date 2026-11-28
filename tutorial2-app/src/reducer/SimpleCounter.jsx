// SimpleCounter.jsx
import { useReducer } from "react";

// Reducer: receives the current state (a number) and an action
function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
}

function SimpleCounter() {
  //     state     dispatch                 reducer   initial state
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>{" "}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default SimpleCounter;
