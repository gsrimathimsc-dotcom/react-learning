// CounterLazy.jsx
import { useReducer } from "react";

// init function: builds the starting state from a starting number
function init(startCount) {
  console.log("🟢 init() ran with", startCount);
  return {
    count: startCount,
    history: [startCount],
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const next = state.count + 1;
      return { count: next, history: [...state.history, next] };
    }
    case "decrement": {
      const next = state.count - 1;
      return { count: next, history: [...state.history, next] };
    }
    case "reset":
      return init(action.payload); // reuse init to reset, with no duplicated code
    default:
      return state;
  }
}

function CounterLazy({ startCount = 10 }) {
  //                                     reducer  initialArg  init
  const [state, dispatch] = useReducer(reducer, startCount, init);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>{" "}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "reset", payload: startCount })}>
        Reset to {startCount}
      </button>
      <p>History: {state.history.join(" → ")}</p>
    </div>
  );
}

export default CounterLazy;
