// CartReducerDemo.jsx
import { useReducer, useState } from "react";
import { cartReducer, initialCartState } from "./cartReducer";

const products = [
  { id: 1, name: "Teddy Bear", price: 499 },
  { id: 2, name: "RC Car", price: 1299 },
  { id: 3, name: "Building Blocks", price: 799 },
];

function CartReducerDemo() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [couponInput, setCouponInput] = useState(""); // useState is fine for simple values

  // Derived values: calculated from the state
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const discount = cart.coupon === "TOY10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;
  const itemCount = cart.items.reduce((sum, item) => sum + item.qty, 0);

  function handleApplyCoupon() {
    if (couponInput.trim().toUpperCase() === "TOY10") {
      dispatch({ type: "APPLY_COUPON", payload: "TOY10" });
    } else {
      alert("Invalid coupon. Try TOY10");
    }
    setCouponInput("");
  }

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  return (
    <div>
      {/* Products */}
      <div style={box}>
        <h3>🧸 Products</h3>
        {products.map((p) => (
          <p key={p.id}>
            {p.name} - ₹{p.price}{" "}
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
              Add to Cart
            </button>
          </p>
        ))}
      </div>

      {/* Cart */}
      <div style={{ ...box, borderColor: "#1976d2" }}>
        <h3>🛒 Cart ({itemCount} items)</h3>

        {cart.items.length === 0 ? (
          <p style={{ color: "gray" }}>Cart is empty</p>
        ) : (
          cart.items.map((item) => (
            <p key={item.id}>
              {item.name} - ₹{item.price} ×{" "}
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE_QTY", payload: item.id })
                }
              >
                -
              </button>{" "}
              {item.qty}{" "}
              <button
                onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
              >
                +
              </button>{" "}
              = ₹{item.price * item.qty}{" "}
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_ITEM", payload: item.id })
                }
              >
                🗑
              </button>
            </p>
          ))
        )}

        {/* Coupon */}
        {cart.coupon ? (
          <p style={{ color: "green" }}>
            ✅ Coupon {cart.coupon} applied{" "}
            <button onClick={() => dispatch({ type: "REMOVE_COUPON" })}>
              Remove
            </button>
          </p>
        ) : (
          <p>
            <input
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              placeholder="Coupon code (TOY10)"
            />{" "}
            <button onClick={handleApplyCoupon}>Apply</button>
          </p>
        )}

        <p>Subtotal: ₹{subtotal}</p>
        {discount > 0 && (
          <p style={{ color: "green" }}>Discount: -₹{discount}</p>
        )}
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      </div>

      {/* Live state, for learning */}
      <div style={{ ...box, backgroundColor: "#f5f5f5" }}>
        <h3>Current State</h3>
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      </div>
    </div>
  );
}

export default CartReducerDemo;
