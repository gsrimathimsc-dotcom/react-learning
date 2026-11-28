// ContextSolution.jsx
import { createContext, useContext, useState } from "react";

// 1. Create the context
const StoreContext = createContext();

// ===================== The components that USE the data read it directly =====================
function UserMenu() {
  const { user, cart, handleLogout } = useContext(StoreContext); // ✅ direct access
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span>👤 {user.name}</span>
      <span>🛒 {cart.length}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function ProductCard({ product }) {
  const { theme, handleAddToCart } = useContext(StoreContext); // ✅ direct access
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "150px",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h4 style={{ margin: "0 0 5px" }}>{product.name}</h4>
      <p style={{ margin: "0 0 5px" }}>₹{product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add</button>
    </div>
  );
}

// ===================== The middle components: NO extra props now =====================
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#2e7d32",
        color: "white",
      }}
    >
      <b>🧸 Toy Store</b>
      <UserMenu />
    </nav>
  );
}

function ProductGrid({ products }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <header>
      <Navbar />
    </header>
  );
}

function MainContent({ products }) {
  return (
    <main>
      <h3 style={{ padding: "0 10px" }}>Products</h3>
      <ProductGrid products={products} />
    </main>
  );
}

function Layout({ products }) {
  const { theme } = useContext(StoreContext);
  return (
    <div
      style={{
        border: "2px solid green",
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
      }}
    >
      <Header />
      <MainContent products={products} />
    </div>
  );
}

// ===================== Owner: provides the data to everything inside =====================
function ContextSolution() {
  const [user, setUser] = useState({ name: "Srimathi" });
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Teddy Bear", price: 499 },
    { id: 2, name: "RC Car", price: 1299 },
    { id: 3, name: "Puzzle", price: 349 },
  ];

  function handleAddToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function handleLogout() {
    setUser({ name: "Guest" });
    setCart([]);
  }

  return (
    // 2. Wrap the tree in a Provider and give it the values
    <StoreContext.Provider
      value={{ user, theme, cart, handleAddToCart, handleLogout }}
    >
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle Theme ({theme})
      </button>
      <Layout products={products} />
    </StoreContext.Provider>
  );
}

export default ContextSolution;
