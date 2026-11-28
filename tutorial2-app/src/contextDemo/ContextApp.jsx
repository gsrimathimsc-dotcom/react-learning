// ContextApp.jsx
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import Navbar from "./Navbar";
import LoginBox from "./LoginBox";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

// Page: notice there are NO props for theme, user or cart
function StorePage() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: "15px",
        borderRadius: "8px",
        minHeight: "400px",
      }}
    >
      <Navbar />
      <LoginBox />
      <ProductList />
      <CartSummary />
    </div>
  );
}

function ContextApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <StorePage />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default ContextApp;
