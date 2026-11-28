// CounterReducer.jsx
import { useReducer } from "react";

// 1. Starting value
const initialState = { count: 0, step: 1 };

// 2. Reducer: ALL the update rules in one place
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload }; // payload = extra data
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// 3. Component
function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        - {state.step}
      </button>{" "}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        + {state.step}
      </button>{" "}
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <p>
        Step:{" "}
        <select
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "SET_STEP", payload: Number(e.target.value) })
          }
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </p>
    </div>
  );
}

export default CounterReducer;
