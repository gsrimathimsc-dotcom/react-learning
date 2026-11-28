// CartWithUseState.jsx
import { useState } from "react";
import { products, boxStyle } from "./products";

function CartWithUseState() {
  // ===== STATE: separate variables =====
  const [items, setItems] = useState([]);
  const [coupon, setCoupon] = useState(null);
  const [couponInput, setCouponInput] = useState("");

  // ===== LOGIC: spread across many handler functions =====
  function addItem(product) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function decreaseItem(id) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function applyCoupon() {
    if (couponInput.trim().toUpperCase() === "TOY10") {
      setCoupon("TOY10");
    } else {
      alert("Invalid coupon. Try TOY10");
    }
    setCouponInput("");
  }

  function clearCart() {
    setItems([]); // two separate updates
    setCoupon(null); // easy to forget one of them
  }

  // ===== Derived values =====
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = coupon ? Math.round(subtotal * 0.1) : 0;

  return (
    <div style={{ ...boxStyle, borderColor: "#1976d2" }}>
      <h3 style={{ color: "#1976d2" }}>Version 1: useState</h3>

      {products.map((p) => (
        <p key={p.id}>
          {p.name} - ₹{p.price} <button onClick={() => addItem(p)}>Add</button>
        </p>
      ))}

      <hr />
      <h4>🛒 Cart</h4>
      {items.length === 0 && <p style={{ color: "gray" }}>Empty</p>}
      {items.map((i) => (
        <p key={i.id}>
          {i.name} <button onClick={() => decreaseItem(i.id)}>-</button> {i.qty}{" "}
          <button onClick={() => addItem(i)}>+</button>{" "}
          <button onClick={() => removeItem(i.id)}>🗑</button>
        </p>
      ))}

      {coupon ? (
        <p style={{ color: "green" }}>✅ {coupon} applied</p>
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
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CartWithUseState;
