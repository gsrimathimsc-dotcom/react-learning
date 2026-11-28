// App.jsx
import CartWithUseState from "./compare/CartWithUseState";
import CartWithUseReducer from "./compare/CartWithUseReducer";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Tutorial 31 - useState vs useReducer</h1>
      <p>Both carts look and work the same. Only the code inside is different.</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <CartWithUseState />
        <CartWithUseReducer />
      </div>
    </div>
  );
}

export default App;