// EventProps.jsx
import { useState } from "react";

// ---------- Child 1: receives event handlers as props ----------
function ToyCard({ id, title, price, onAddToCart, onRemove, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(title)} // calls the parent's function
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "10px",
        width: "170px",
      }}
    >
      <h4 style={{ margin: "0 0 5px" }}>{title}</h4>
      <p style={{ margin: "0 0 8px" }}>₹{price}</p>
      {/* The child doesn't know what happens. It just calls the prop */}
      <button onClick={() => onAddToCart(title, price)}>
        Add to Cart
      </button>{" "}
      <button onClick={() => onRemove(id)}>❌</button>
    </div>
  );
}

// ---------- Child 2: a reusable button ----------
function CustomButton({ label, color, onClick }) {
  return (
    <button
      onClick={onClick} // forwards the parent's handler directly
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "8px 14px",
        marginRight: "6px",
      }}
    >
      {label}
    </button>
  );
}

// ---------- Child 3: a search box that sends text up ----------
function SearchBox({ onSearch }) {
  return (
    <input
      placeholder="Search toys..."
      onChange={(e) => onSearch(e.target.value)} // sends the typed text to the parent
      style={{ padding: "6px", width: "220px", marginBottom: "10px" }}
    />
  );
}

// ---------- Parent: owns the data and the handler functions ----------
function EventProps() {
  const [toys, setToys] = useState([
    { id: 1, title: "Teddy Bear", price: 499 },
    { id: 2, title: "RC Car", price: 1299 },
    { id: 3, title: "Building Blocks", price: 799 },
  ]);
  const [cart, setCart] = useState([]);
  const [hovered, setHovered] = useState("");
  const [search, setSearch] = useState("");

  // Handler functions are defined in the PARENT
  function handleAddToCart(title, price) {
    setCart([...cart, { title, price }]);
  }

  function handleRemove(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  function handleClearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const visibleToys = toys.filter((toy) =>
    toy.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      style={{ border: "1px solid #1976d2", padding: "15px", margin: "10px 0" }}
    >
      {/* Handler passed to SearchBox */}
      <SearchBox onSearch={setSearch} />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {visibleToys.map((toy) => (
          <ToyCard
            key={toy.id}
            id={toy.id}
            title={toy.title}
            price={toy.price}
            onAddToCart={handleAddToCart} // function passed as a prop
            onRemove={handleRemove} // function passed as a prop
            onHover={setHovered} // a setter can be passed directly
          />
        ))}
      </div>

      <p>
        👀 Last hovered: <b>{hovered}</b>
      </p>

      <h3>
        🛒 Cart ({cart.length} items) - Total: ₹{total}
      </h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ₹{item.price}
          </li>
        ))}
      </ul>

      {/* Handlers passed to a reusable button */}
      <CustomButton
        label="Clear Cart"
        color="#d32f2f"
        onClick={handleClearCart}
      />
      <CustomButton
        label="Checkout"
        color="#2e7d32"
        onClick={() => alert("Total: ₹" + total)}
      />
    </div>
  );
}

export default EventProps;
