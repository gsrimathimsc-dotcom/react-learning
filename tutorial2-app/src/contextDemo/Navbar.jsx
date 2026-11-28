// Navbar.jsx
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
        backgroundColor: "#1976d2",
        color: "white",
        borderRadius: "6px"
      }}
    >
      <b>🧸 Toy Store</b>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button onClick={toggleTheme}>{theme === "light" ? "🌙 Dark" : "☀️ Light"}</button>
        <span>🛒 {cartCount}</span>
        {user ? (
          <>
            <span>👤 {user.name} ({user.role})</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;