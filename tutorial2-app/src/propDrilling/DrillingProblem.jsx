// DrillingProblem.jsx
import { useState } from "react";

// ===================== LEVEL 5: the ONLY components that use the data =====================
function UserMenu({ user, cartCount, onLogout }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span>👤 {user.name}</span>
      <span>🛒 {cartCount}</span>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function ProductCard({ product, theme, onAddToCart }) {
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
      <button onClick={() => onAddToCart(product)}>Add</button>
    </div>
  );
}

// ===================== LEVEL 4 =====================
// ❌ Navbar does NOT use user, cartCount or onLogout. It only passes them on.
function Navbar({ user, cartCount, onLogout }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <b>🧸 Toy Store</b>
      <UserMenu user={user} cartCount={cartCount} onLogout={onLogout} />
    </nav>
  );
}

// ❌ ProductGrid does NOT use theme or onAddToCart. It only passes them on.
function ProductGrid({ products, theme, onAddToCart }) {
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
        <ProductCard
          key={p.id}
          product={p}
          theme={theme}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// ===================== LEVEL 3 =====================
// ❌ Header does NOT use these props
function Header({ user, cartCount, onLogout }) {
  return (
    <header>
      <Navbar user={user} cartCount={cartCount} onLogout={onLogout} />
    </header>
  );
}

// ❌ MainContent does NOT use theme or onAddToCart
function MainContent({ products, theme, onAddToCart }) {
  return (
    <main>
      <h3 style={{ padding: "0 10px" }}>Products</h3>
      <ProductGrid
        products={products}
        theme={theme}
        onAddToCart={onAddToCart}
      />
    </main>
  );
}

// ===================== LEVEL 2 =====================
// ❌ Layout receives SIX props and uses only ONE (theme for the background)
function Layout({ user, cartCount, onLogout, products, theme, onAddToCart }) {
  return (
    <div
      style={{
        border: "2px solid red",
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
      }}
    >
      <Header user={user} cartCount={cartCount} onLogout={onLogout} />
      <MainContent
        products={products}
        theme={theme}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

// ===================== LEVEL 1: owns the data =====================
function DrillingProblem() {
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
    <div>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle Theme ({theme})
      </button>

      {/* Six props passed down through 3–4 levels */}
      <Layout
        user={user}
        cartCount={cart.length}
        onLogout={handleLogout}
        products={products}
        theme={theme}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default DrillingProblem;
