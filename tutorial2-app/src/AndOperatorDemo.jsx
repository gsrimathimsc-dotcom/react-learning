// AndOperatorDemo.jsx
// condition && <JSX>
// true  → shows the JSX
// false → shows nothing

function AndOperatorDemo({ name, isAdmin, cartCount, discount }) {
  return (
    <div
      style={{ border: "1px solid #1976d2", padding: "10px", margin: "10px 0" }}
    >
      <h3>Hello, {name}</h3>

      {/* shown only for admins */}
      {isAdmin && <p style={{ color: "purple" }}>⭐ Admin Panel Access</p>}

      {/* shown only if the cart has items */}
      {cartCount > 0 && <p>🛒 You have {cartCount} item(s) in your cart</p>}

      {/* shown only if there's a discount */}
      {discount > 0 && (
        <p style={{ color: "green" }}>🎉 {discount}% discount applied!</p>
      )}
    </div>
  );
}

export default AndOperatorDemo;
