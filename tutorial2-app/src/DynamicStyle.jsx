// DynamicStyle.jsx
import "./DynamicStyle.css";

function ToyCard({ title, price, inStock, featured, rating }) {
  // Build the className list from the props
  const cardClass = [
    "toy-card",
    inStock ? "in-stock" : "out-of-stock", // ternary
    featured && "featured", // && (adds the class only if true)
  ]
    .filter(Boolean) // removes false values
    .join(" "); // → "toy-card in-stock featured"

  return (
    <div className={cardClass}>
      <h3 style={{ marginTop: 0 }}>
        {featured && "⭐ "}
        {title}
      </h3>
      <p>₹{price}</p>

      {/* Dynamic inline style: the bar width comes from a prop */}
      <div
        style={{ backgroundColor: "#eee", height: "8px", borderRadius: "4px" }}
      >
        <div
          style={{
            width: `${rating * 20}%`, // rating 4 → 80%
            height: "100%",
            borderRadius: "4px",
            backgroundColor: rating >= 4 ? "green" : "orange",
          }}
        ></div>
      </div>
      <small>Rating: {rating}/5</small>
    </div>
  );
}

function DynamicStyle() {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <ToyCard
        title="Teddy Bear"
        price={499}
        inStock={true}
        featured={true}
        rating={5}
      />
      <ToyCard
        title="RC Car"
        price={1299}
        inStock={false}
        featured={false}
        rating={3}
      />
      <ToyCard
        title="Blocks"
        price={799}
        inStock={true}
        featured={false}
        rating={4}
      />
    </div>
  );
}

export default DynamicStyle;
