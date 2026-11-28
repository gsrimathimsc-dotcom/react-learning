// ProductList.jsx
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Teddy Bear", price: 499 },
  { id: 2, name: "RC Car", price: 1299 },
  { id: 3, name: "Puzzle Set", price: 349 },
  { id: 4, name: "Toy Train", price: 999 },
];

// ProductCard is nested inside ProductList, yet it reads the context directly
function ProductCard({ product }) {
  const { colors } = useTheme();
  const { isLoggedIn, user } = useAuth();
  const { addToCart } = useCart();

  return (
    <div
      style={{
        backgroundColor: colors.card,
        padding: "10px",
        borderRadius: "6px",
        width: "160px",
      }}
    >
      <h4 style={{ margin: "0 0 5px" }}>{product.name}</h4>
      <p style={{ margin: "0 0 8px" }}>₹{product.price}</p>
      {isLoggedIn ? (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <small>Login to buy</small>
      )}
      {user?.role === "admin" && (
        <p style={{ margin: "5px 0 0", color: "orange" }}>✏️ Admin: Edit</p>
      )}
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <h3>Products</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
