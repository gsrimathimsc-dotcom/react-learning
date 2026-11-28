// ArrayStateDemo.jsx
import { useState } from "react";

const initialToys = [
  { id: 1, name: "Teddy Bear", price: 499, inStock: true },
  { id: 2, name: "RC Car", price: 1299, inStock: false },
  { id: 3, name: "Building Blocks", price: 799, inStock: true },
];

function ArrayStateDemo() {
  // ---------- Simple array (strings) ----------
  const [colors, setColors] = useState(["Red", "Blue"]);
  const [colorInput, setColorInput] = useState("");

  // ---------- Array of objects ----------
  const [toys, setToys] = useState(initialToys);
  const [nextId, setNextId] = useState(4);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // ===== SIMPLE ARRAY =====
  function addColor() {
    if (colorInput.trim() === "") return;
    setColors((prev) => [...prev, colorInput]); // add at the end
    setColorInput("");
  }

  function removeColor(indexToRemove) {
    setColors((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  // ===== ARRAY OF OBJECTS =====

  // 1. ADD at the end
  function addToy() {
    if (newName.trim() === "" || newPrice === "") return;
    const toy = {
      id: nextId,
      name: newName,
      price: Number(newPrice),
      inStock: true,
    };
    setToys((prev) => [...prev, toy]);
    setNextId((prev) => prev + 1);
    setNewName("");
    setNewPrice("");
  }

  // 2. ADD at the start
  function addToStart() {
    const toy = {
      id: nextId,
      name: "Special Toy " + nextId,
      price: 999,
      inStock: true,
    };
    setToys((prev) => [toy, ...prev]);
    setNextId((prev) => prev + 1);
  }

  // 3. REMOVE by id
  function removeToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  // 4. UPDATE one item (change one property)
  function toggleStock(id) {
    setToys((prev) =>
      prev.map((toy) =>
        toy.id === id ? { ...toy, inStock: !toy.inStock } : toy,
      ),
    );
  }

  // 5. UPDATE all items
  function increaseAllPrices() {
    setToys((prev) => prev.map((toy) => ({ ...toy, price: toy.price + 100 })));
  }

  // 6. INSERT at a position (after the first item)
  function insertAtSecond() {
    const toy = {
      id: nextId,
      name: "Inserted Toy " + nextId,
      price: 299,
      inStock: true,
    };
    setToys((prev) => [...prev.slice(0, 1), toy, ...prev.slice(1)]);
    setNextId((prev) => prev + 1);
  }

  // 7. SORT (on a copy)
  function sortByPrice() {
    setToys((prev) => [...prev].sort((a, b) => a.price - b.price));
  }

  // 8. REVERSE (on a copy)
  function reverseList() {
    setToys((prev) => [...prev].reverse());
  }

  // 9. CLEAR and RESET
  function clearAll() {
    setToys([]);
  }

  function resetList() {
    setToys(initialToys);
    setNextId(4);
  }

  // 10. FILTER for display only (the state is NOT changed)
  const visibleToys = showInStockOnly
    ? toys.filter((toy) => toy.inStock)
    : toys;
  const total = toys.reduce((sum, toy) => sum + toy.price, 0);

  return (
    <div>
      {/* ---------- SIMPLE ARRAY ---------- */}
      <div style={box}>
        <h3>A. Simple Array (strings)</h3>
        <input
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addColor()}
          placeholder="Add a color"
        />{" "}
        <button onClick={addColor}>Add</button>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              {color} <button onClick={() => removeColor(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- ARRAY OF OBJECTS ---------- */}
      <div style={box}>
        <h3>B. Array of Objects (Toy List)</h3>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Toy name"
        />{" "}
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Price"
          style={{ width: "80px" }}
        />{" "}
        <button onClick={addToy}>➕ Add</button>
        <div style={{ margin: "10px 0" }}>
          <button onClick={addToStart}>Add to Start</button>{" "}
          <button onClick={insertAtSecond}>Insert at 2nd</button>{" "}
          <button onClick={increaseAllPrices}>All +₹100</button>{" "}
          <button onClick={sortByPrice}>Sort by Price</button>{" "}
          <button onClick={reverseList}>Reverse</button>{" "}
          <button onClick={clearAll}>Clear All</button>{" "}
          <button onClick={resetList}>Reset</button>
        </div>
        <label>
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => setShowInStockOnly(e.target.checked)}
          />
          Show in-stock only
        </label>
        {visibleToys.length === 0 ? (
          <p style={{ color: "gray" }}>No toys to show.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e3f2fd" }}>
                <th style={{ textAlign: "left" }}>ID</th>
                <th style={{ textAlign: "left" }}>Name</th>
                <th style={{ textAlign: "left" }}>Price</th>
                <th style={{ textAlign: "left" }}>Stock</th>
                <th style={{ textAlign: "left" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleToys.map((toy) => (
                <tr key={toy.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td>{toy.id}</td>
                  <td>{toy.name}</td>
                  <td>₹{toy.price}</td>
                  <td style={{ color: toy.inStock ? "green" : "red" }}>
                    {toy.inStock ? "In Stock" : "Out"}
                  </td>
                  <td>
                    <button onClick={() => toggleStock(toy.id)}>Toggle</button>{" "}
                    <button onClick={() => removeToy(toy.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p>
          <b>
            Total toys: {toys.length} | Total value: ₹{total}
          </b>
        </p>
      </div>
    </div>
  );
}

export default ArrayStateDemo;
