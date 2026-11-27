// ExternalCSS.jsx
import "./ExternalCSS.css"; // import the CSS file

function ExternalCSS() {
  return (
    <div className="product-card">
      {" "}
      {/* className, not class */}
      <h3 className="product-title">Building Blocks</h3>
      <p className="product-price">₹799</p>
      <button className="buy-btn">Add to Cart</button>
    </div>
  );
}

export default ExternalCSS;
