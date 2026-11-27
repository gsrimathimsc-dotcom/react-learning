// InlineStyle.jsx
// Styles are written as a JavaScript object.
// Property names are camelCase, and values are strings (or numbers for px).

function InlineStyle() {
  // Style objects stored in variables keep the JSX clean
  const cardStyle = {
    border: "2px solid #1976d2",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#e3f2fd",
    width: "250px",
  };

  const titleStyle = {
    color: "#1976d2",
    fontSize: "20px",
    marginTop: 0,
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>Teddy Bear</h3>
      <p style={{ fontWeight: "bold", color: "green" }}>₹499</p>{" "}
      {/* written directly */}
      <button style={{ padding: "8px 16px", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default InlineStyle;
