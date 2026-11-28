// CartSummary.jsx
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

function CartSummary() {
  const { cart, addToCart, decreaseQty, clearCart, cartTotal } = useCart();
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.card,
        padding: "10px",
        borderRadius: "6px",
        marginTop: "15px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>🛒 Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name}{" "}
              <button onClick={() => decreaseQty(item.id)}>-</button> {item.qty}{" "}
              <button onClick={() => addToCart(item)}>+</button> = ₹
              {item.price * item.qty}
            </p>
          ))}
          <p>
            <b>Total: ₹{cartTotal}</b>
          </p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartSummary;
