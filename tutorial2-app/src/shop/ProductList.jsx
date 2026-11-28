// ProductList.jsx
// Receives products and cart from the parent.
// It uses the cart to show "Added (2)" on each product.

function ProductList({ products, cart, onAddToCart }) {
  if (products.length === 0) {
    return <p style={{ color: "gray" }}>No toys match your search.</p>;
  }

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {products.map((product) => {
        // Look this product up in the SHARED cart
        const cartItem = cart.find((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              width: "170px",
              backgroundColor: cartItem ? "#e8f5e9" : "white",
            }}
          >
            <h4 style={{ margin: "0 0 5px" }}>{product.name}</h4>
            <p style={{ margin: "0 0 8px" }}>₹{product.price}</p>
            <button onClick={() => onAddToCart(product)}>
              {cartItem ? `✔ Added (${cartItem.qty})` : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
