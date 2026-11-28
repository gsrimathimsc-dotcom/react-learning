// ShopPage.jsx
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

const allProducts = [
  { id: 1, name: "Teddy Bear", price: 499 },
  { id: 2, name: "RC Car", price: 1299 },
  { id: 3, name: "Building Blocks", price: 799 },
  { id: 4, name: "Puzzle Set", price: 349 },
  { id: 5, name: "Toy Train", price: 999 },
];

function ShopPage() {
  // ===== SHARED STATE: lives here, in the common parent =====
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);

  // ===== Handlers: passed down to the children =====
  function handleAddToCart(product) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // already in the cart → increase qty
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      // new item → add with qty 1
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function handleRemove(id) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  }

  function handleClear() {
    setCart([]);
  }

  // Derived data: calculated from the state, not stored separately
  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      {/* The header also uses the shared cart */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🧸 Toy Shop</h2>
        <span
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "5px 12px",
            borderRadius: "20px",
          }}
        >
          🛒 {cartCount}
        </span>
      </div>

      <SearchBar searchText={searchText} onSearch={setSearchText} />

      <ProductList
        products={filteredProducts}
        cart={cart}
        onAddToCart={handleAddToCart}
      />

      <CartSummary cart={cart} onRemove={handleRemove} onClear={handleClear} />
    </div>
  );
}

export default ShopPage;
