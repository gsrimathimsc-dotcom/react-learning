// KeyboardEvents.jsx
import { useState } from "react";

function KeyboardEvents() {
  const [text, setText] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [toys, setToys] = useState(["Teddy Bear"]);

  function handleKeyDown(e) {
    setLastKey(e.key);                       // the name of the key pressed

    if (e.key === "Enter" && text.trim() !== "") {
      setToys([...toys, text]);              // add to the list
      setText("");                           // clear the input
    }

    if (e.key === "Escape") {
      setText("");                           // clear on Esc
    }
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}   // runs on every letter typed
        onKeyDown={handleKeyDown}                   // runs on every key press
        placeholder="Type a toy name and press Enter"
        style={{ padding: "6px", width: "260px" }}
      />

      <p>Last key pressed: <b>{lastKey}</b></p>
      <p>You are typing: {text}</p>
      <p>Characters: {text.length}</p>

      <ul>
        {toys.map((toy) => (
          <li key={toy}>{toy}</li>
        ))}
      </ul>
      <small>Enter = add · Esc = clear</small>
    </div>
  );
}

export default KeyboardEvents;