// SnapshotDemo.jsx
import { useState } from "react";

function SnapshotDemo() {
  const [count, setCount] = useState(0);
  const [recipient, setRecipient] = useState("Priya");
  const [messages, setMessages] = useState([]);

  const box = { border: "1px solid #ccc", padding: "10px", margin: "10px 0" };

  // 1. The value doesn't change inside the same render
  function sameRender() {
    setCount(count + 1);
    setMessages([...messages, `Inside the handler, count = ${count} (old snapshot)`]);
  }

  // 2. Three updates with the same snapshot
  function threeUpdates() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  // 3. Updater function → reads the latest value
  function threeUpdatesFixed() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // 4. Delayed code keeps the old snapshot
  function delayedAlert() {
    setCount(count + 5);
    setTimeout(() => {
      alert(`Timer saw count = ${count}, but the screen shows the new value`);
    }, 3000);
  }

  // 5. Send to whoever was selected at click time
  function sendGift() {
    setTimeout(() => {
      alert(`🎁 Gift sent to ${recipient}`);
    }, 4000);
  }

  return (
    <div>
      <h2>Count on screen: {count}</h2>
      <button onClick={() => { setCount(0); setMessages([]); }}>Reset</button>

      <div style={box}>
        <h3>1. Same render = same value</h3>
        <button onClick={sameRender}>+1 and log the value</button>
        <ul>
          {messages.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>

      <div style={box}>
        <h3>2 & 3. Three updates</h3>
        <button onClick={threeUpdates}>❌ count + 1 (×3) → only +1</button>{" "}
        <button onClick={threeUpdatesFixed}>✅ prev + 1 (×3) → +3</button>
      </div>

      <div style={box}>
        <h3>4. Timer keeps the old snapshot</h3>
        <button onClick={delayedAlert}>+5, alert after 3 seconds</button>
      </div>

      <div style={box}>
        <h3>5. Send gift (snapshot is useful)</h3>
        <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
          <option>Priya</option>
          <option>Ravi</option>
          <option>Anitha</option>
        </select>{" "}
        <button onClick={sendGift}>Send gift (after 4 seconds)</button>
        <p><small>Click Send, then quickly change the name. The gift still goes to the first name.</small></p>
      </div>
    </div>
  );
}

export default SnapshotDemo;