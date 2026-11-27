// KeyAntipatternDemo.jsx
import { useState } from "react";

function KeyAntipatternDemo() {
  const [toys, setToys] = useState([
    { id: 1, name: "Teddy Bear" },
    { id: 2, name: "RC Car" },
    { id: 3, name: "Puzzle" },
  ]);
  const [nextId, setNextId] = useState(4);

  function addToTop() {
    setToys([{ id: nextId, name: "New Toy " + nextId }, ...toys]);
    setNextId(nextId + 1);
  }

  const boxStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    width: "300px",
  };

  return (
    <div>
      <button onClick={addToTop} style={{ marginBottom: "10px" }}>
        ➕ Add Toy to Top
      </button>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* ❌ WRONG: index as key */}
        <div style={{ ...boxStyle, borderColor: "red" }}>
          <h3 style={{ color: "red" }}>❌ key = index</h3>
          {toys.map((toy, index) => (
            <div key={index} style={{ margin: "5px 0" }}>
              {toy.name} <input placeholder="type a note" />
            </div>
          ))}
        </div>

        {/* ✅ CORRECT: id as key */}
        <div style={{ ...boxStyle, borderColor: "green" }}>
          <h3 style={{ color: "green" }}>✅ key = id</h3>
          {toys.map((toy) => (
            <div key={toy.id} style={{ margin: "5px 0" }}>
              {toy.name} <input placeholder="type a note" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyAntipatternDemo;
