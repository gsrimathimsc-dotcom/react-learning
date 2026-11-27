// MouseEvents.jsx
import { useState } from "react";

function MouseEvents() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      {/* 1. Hover: onMouseEnter and onMouseLeave */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "220px",
          padding: "15px",
          border: "2px solid #1976d2",
          backgroundColor: isHovered ? "#1976d2" : "white",
          color: isHovered ? "white" : "black",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "all 0.3s",
        }}
      >
        🧸 Teddy Bear - {isHovered ? "Buy now for ₹499!" : "Hover over me"}
      </div>

      {/* 2. Mouse move: track the cursor position */}
      <div
        onMouseMove={(e) =>
          setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        }
        style={{
          width: "300px",
          height: "100px",
          backgroundColor: "#f3e5f5",
          marginTop: "10px",
        }}
      >
        Move your mouse here → X: {position.x}, Y: {position.y}
      </div>

      {/* 3. Right-click: onContextMenu */}
      <div
        onContextMenu={(e) => {
          e.preventDefault(); // stops the browser's own right-click menu
          setMessage("Right-click detected! Custom menu could open here.");
        }}
        style={{
          padding: "15px",
          backgroundColor: "#fff3e0",
          marginTop: "10px",
        }}
      >
        Right-click inside this box
      </div>
      <p>{message}</p>
    </div>
  );
}

export default MouseEvents;
