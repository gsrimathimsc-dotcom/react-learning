// OtherEvents.jsx
import { useState } from "react";

function OtherEvents() {
  const [message, setMessage] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      {/* Copy */}
      <p onCopy={() => setMessage("📋 You copied the coupon code!")}>
        Coupon code: <b>TOY50</b> (select and copy it)
      </p>

      {/* Paste */}
      <input
        placeholder="Paste something here"
        onPaste={(e) => setMessage("📥 Pasted: " + e.clipboardData.getData("text"))}
      />

      <p>{message}</p>

      {/* Scroll */}
      <div
        onScroll={(e) => setScrollTop(Math.round(e.target.scrollTop))}
        style={{ height: "80px", overflowY: "scroll", border: "1px solid #999", padding: "5px" }}
      >
        {Array.from({ length: 15 }, (_, i) => (
          <p key={i} style={{ margin: "4px 0" }}>Toy item {i + 1}</p>
        ))}
      </div>
      <p>Scrolled: {scrollTop}px</p>
    </div>
  );
}

export default OtherEvents;