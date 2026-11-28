// CartWithUseReducer.jsx
import { useReducer, useState } from "react";
import { products, boxStyle } from "./products";

// ===== STATE: one object =====
const initialState = { items: [], coupon: null };

// ===== LOGIC: all in ONE place (the reducer) =====
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };
    }

    case "DECREASE":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "APPLY_COUPON":
      return { ...state, coupon: action.payload };

    case "CLEAR":
      return initialState; // one line resets EVERYTHING

    default:
      return state;
  }
}

function CartWithUseReducer() {
  // useReducer → the cart (complex, many actions)
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // useState → the input box (simple, just text)
  const [couponInput, setCouponInput] = useState("");

  function applyCoupon() {
    if (couponInput.trim().toUpperCase() === "TOY10") {
      dispatch({ type: "APPLY_COUPON", payload: "TOY10" });
    } else {
      alert("Invalid coupon. Try TOY10");
    }
    setCouponInput("");
  }

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = state.coupon ? Math.round(subtotal * 0.1) : 0;

  return (
    <div style={{ ...boxStyle, borderColor: "#2e7d32" }}>
      <h3 style={{ color: "#2e7d32" }}>Version 2: useReducer + useState</h3>

      {products.map((p) => (
        <p key={p.id}>
          {p.name} - ₹{p.price}{" "}
          <button onClick={() => dispatch({ type: "ADD", payload: p })}>
            Add
          </button>
        </p>
      ))}

      <hr />
      <h4>🛒 Cart</h4>
      {state.items.length === 0 && <p style={{ color: "gray" }}>Empty</p>}
      {state.items.map((i) => (
        <p key={i.id}>
          {i.name}{" "}
          <button onClick={() => dispatch({ type: "DECREASE", payload: i.id })}>
            -
          </button>{" "}
          {i.qty}{" "}
          <button onClick={() => dispatch({ type: "ADD", payload: i })}>
            +
          </button>{" "}
          <button onClick={() => dispatch({ type: "REMOVE", payload: i.id })}>
            🗑
          </button>
        </p>
      ))}

      {state.coupon ? (
        <p style={{ color: "green" }}>✅ {state.coupon} applied</p>
      ) : (
        <p>
          <input
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value)}
            placeholder="TOY10"
          />{" "}
          <button onClick={applyCoupon}>Apply</button>
        </p>
      )}

      <p>
        Subtotal: ₹{subtotal} | Discount: ₹{discount}
      </p>
      <p>
        <b>Total: ₹{subtotal - discount}</b>
      </p>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear Cart</button>
    </div>
  );
}

export default CartWithUseReducer;
