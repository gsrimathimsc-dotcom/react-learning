// VariableDemo.jsx
// Work out the logic BEFORE return, store the result in variables,
// then just use {variable} inside the JSX.

function VariableDemo({ orderId, status, amount }) {
  // ----- Logic 1: choose a message and color for each status -----
  let statusMessage;
  let statusColor;

  if (status === "placed") {
    statusMessage = "📦 Order Placed";
    statusColor = "blue";
  } else if (status === "shipped") {
    statusMessage = "🚚 Order Shipped";
    statusColor = "orange";
  } else if (status === "delivered") {
    statusMessage = "✅ Order Delivered";
    statusColor = "green";
  } else if (status === "cancelled") {
    statusMessage = "❌ Order Cancelled";
    statusColor = "red";
  } else {
    statusMessage = "❓ Unknown Status";
    statusColor = "gray";
  }

  // ----- Logic 2: work out the delivery charge -----
  let deliveryCharge;
  if (amount >= 1000) {
    deliveryCharge = 0; // free delivery
  } else if (amount >= 500) {
    deliveryCharge = 40;
  } else {
    deliveryCharge = 80;
  }

  const total = amount + deliveryCharge;

  // ----- Logic 3: store JSX in a variable -----
  let actionButton = null;
  if (status === "placed") {
    actionButton = <button>Cancel Order</button>;
  } else if (status === "delivered") {
    actionButton = <button>Write a Review</button>;
  }

  // ----- The JSX stays short and clean -----
  return (
    <div
      style={{
        border: `2px solid ${statusColor}`,
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <h3>Order #{orderId}</h3>
      <p style={{ color: statusColor, fontWeight: "bold" }}>{statusMessage}</p>
      <p>Amount: ₹{amount}</p>
      <p>Delivery: {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</p>
      <p>
        <b>Total: ₹{total}</b>
      </p>
      {actionButton}
    </div>
  );
}

export default VariableDemo;
