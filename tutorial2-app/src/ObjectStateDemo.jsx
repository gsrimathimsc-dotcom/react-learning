// ObjectStateDemo.jsx
import { useState } from "react";

const initialProduct = {
  title: "",
  price: 0,
  category: "Soft Toys",
  inStock: true,
  supplier: {
    // nested object
    name: "",
    city: "",
  },
};

function ObjectStateDemo() {
  // ONE state object holds all the product fields
  const [product, setProduct] = useState(initialProduct);
  const [savedProducts, setSavedProducts] = useState([]);

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // ---------- 1. One handler for ALL the inputs ----------
  // Each input has a "name" that matches a property of the object
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev, // keep the other fields
      [name]:
        type === "checkbox"
          ? checked // checkbox → true/false
          : type === "number"
            ? Number(value) // number input → number
            : value, // text/select → string
    }));
  }

  // ---------- 2. Updating a NESTED object ----------
  function handleSupplierChange(e) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev, // copy the outer object
      supplier: {
        ...prev.supplier, // copy the inner object
        [name]: value, // change one inner field
      },
    }));
  }

  // ---------- 3. Changing one property from a button ----------
  function applyDiscount() {
    setProduct((prev) => ({ ...prev, price: Math.round(prev.price * 0.9) }));
  }

  function toggleStock() {
    setProduct((prev) => ({ ...prev, inStock: !prev.inStock }));
  }

  // ---------- 4. Save and reset ----------
  function handleSubmit(e) {
    e.preventDefault();
    if (product.title.trim() === "") {
      alert("Please enter a product title");
      return;
    }
    setSavedProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    setProduct(initialProduct); // reset the form to empty values
  }

  return (
    <div>
      {/* ---------- FORM ---------- */}
      <form onSubmit={handleSubmit} style={box}>
        <h3>Add Product</h3>
        <label>Title: </label>
        <input name="title" value={product.title} onChange={handleChange} />
        <br />
        <br />
        <label>Price: </label>
        <input
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
        />{" "}
        <button type="button" onClick={applyDiscount}>
          10% Off
        </button>
        <br />
        <br />
        <label>Category: </label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option>Soft Toys</option>
          <option>Vehicles</option>
          <option>Educational</option>
        </select>
        <br />
        <br />
        <label>
          <input
            name="inStock"
            type="checkbox"
            checked={product.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>{" "}
        <button type="button" onClick={toggleStock}>
          Toggle Stock
        </button>
        <br />
        <br />
        <h4 style={{ margin: "5px 0" }}>Supplier (nested object)</h4>
        <label>Name: </label>
        <input
          name="name"
          value={product.supplier.name}
          onChange={handleSupplierChange}
        />
        <br />
        <br />
        <label>City: </label>
        <input
          name="city"
          value={product.supplier.city}
          onChange={handleSupplierChange}
        />
        <br />
        <br />
        <button type="submit">💾 Save Product</button>{" "}
        <button type="button" onClick={() => setProduct(initialProduct)}>
          Clear
        </button>
      </form>

      {/* ---------- LIVE PREVIEW of the object ---------- */}
      <div style={{ ...box, backgroundColor: "#f5f5f5" }}>
        <h3>Live State Object</h3>
        <pre>{JSON.stringify(product, null, 2)}</pre>
      </div>

      {/* ---------- SAVED PRODUCTS ---------- */}
      <div style={box}>
        <h3>Saved Products ({savedProducts.length})</h3>
        {savedProducts.length === 0 && <p>No products saved yet.</p>}
        {savedProducts.map((p) => (
          <div
            key={p.id}
            style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}
          >
            <b>{p.title}</b> - ₹{p.price} - {p.category} -{" "}
            <span style={{ color: p.inStock ? "green" : "red" }}>
              {p.inStock ? "In Stock" : "Out of Stock"}
            </span>
            {p.supplier.name && (
              <small>
                {" "}
                (Supplier: {p.supplier.name}, {p.supplier.city})
              </small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ObjectStateDemo;
