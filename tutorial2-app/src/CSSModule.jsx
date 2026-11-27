// CSSModule.jsx
import styles from "./CSSModule.module.css"; // import as an object

function CSSModule() {
  return (
    <div className={styles.card}>
      {" "}
      {/* styles.className */}
      <h3 className={styles.title}>Puzzle Set</h3>
      <p>₹349</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}

export default CSSModule;
