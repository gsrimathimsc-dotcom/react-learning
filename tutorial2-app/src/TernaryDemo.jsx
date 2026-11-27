// TernaryDemo.jsx
// Ternary: condition ? (if true) : (if false)
// It's an expression, so it works inside { } in JSX.

function TernaryDemo({ title, price, inStock }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        backgroundColor: inStock ? "#f0fff0" : "#fff0f0", // ternary in a style
      }}
    >
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>

      {/* ternary for text */}
      <p style={{ color: inStock ? "green" : "red", fontWeight: "bold" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* ternary to choose between two elements */}
      {inStock ? (
        <button>Add to Cart</button>
      ) : (
        <button disabled>Notify Me</button>
      )}
    </div>
  );
}

export default TernaryDemo;
