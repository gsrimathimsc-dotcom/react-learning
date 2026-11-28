// Wishlist.jsx
import { useReducer, useEffect, useState } from "react";
import { wishlistReducer, loadWishlist, saveWishlist } from "./wishlistReducer";

const defaultItems = [
  { id: 1, name: "Teddy Bear" },
  { id: 2, name: "Toy Train" },
];

function Wishlist() {
  // Lazy init: loadWishlist(defaultItems) runs only on the first render
  const [state, dispatch] = useReducer(
    wishlistReducer,
    defaultItems,
    loadWishlist,
  );
  const [input, setInput] = useState("");

  // Save to localStorage whenever the wishlist changes
  useEffect(() => {
    saveWishlist(state);
  }, [state]);

  function handleAdd() {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: { id: Date.now(), name: input.trim() } });
    setInput("");
  }

  return (
    <div
      style={{ border: "1px solid #1976d2", padding: "10px", margin: "10px 0" }}
    >
      <h3>❤️ My Wishlist ({state.items.length})</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a toy"
      />{" "}
      <button onClick={handleAdd}>Add</button>{" "}
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      {state.items.length === 0 ? (
        <p style={{ color: "gray" }}>Wishlist is empty</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>
        <small>
          💾 Add some toys, then refresh the page (F5). They stay saved.
        </small>
      </p>
    </div>
  );
}

export default Wishlist;
