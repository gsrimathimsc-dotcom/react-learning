// ProductList.jsx

// Child component: shows one product
function ProductItem({ title, price, inStock }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "10px",
        width: "180px",
        backgroundColor: inStock ? "#f0fff0" : "#fff0f0",
      }}
    >
      <h4 style={{ margin: "0 0 5px" }}>{title}</h4>
      <p style={{ margin: "2px 0" }}>₹{price}</p>
      <p style={{ margin: "2px 0", color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

// Parent component: loops over the array
function ProductList() {
  const products = [
    { id: 1, title: "Teddy Bear", price: 499, inStock: true },
    { id: 2, title: "Remote Control Car", price: 1299, inStock: false },
    { id: 3, title: "Building Blocks", price: 799, inStock: true },
    { id: 4, title: "Puzzle Set", price: 349, inStock: true },
  ];

  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Toy Products ({products.length})</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductItem
            key={product.id} // a unique id is the best key
            title={product.title}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
