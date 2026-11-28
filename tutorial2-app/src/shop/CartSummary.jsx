// CartSummary.jsx
// Reads the SAME cart that ProductList uses.

function CartSummary({ cart, onRemove, onClear }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      style={{
        border: "2px solid #1976d2",
        borderRadius: "6px",
        padding: "10px",
        marginTop: "15px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>🛒 Cart ({totalItems} items)</h3>

      {cart.length === 0 ? (
        <p style={{ color: "gray" }}>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <p key={item.id} style={{ margin: "4px 0" }}>
              {item.name} × {item.qty} = ₹{item.price * item.qty}{" "}
              <button onClick={() => onRemove(item.id)}>➖</button>
            </p>
          ))}
          <p>
            <b>Total: ₹{totalPrice}</b>
          </p>
          <button onClick={onClear}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartSummary;
