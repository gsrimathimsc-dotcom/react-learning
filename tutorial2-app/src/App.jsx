// App.jsx
import CounterReducer from "./reducer/CounterReducer";
import CartReducerDemo from "./reducer/CartReducerDemo";
import SimpleCounter from "./reducer/SimpleCounter";
import ProductManager from "./productManager/ProductManager";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Tutorial 27 - useReducer Hook</h1>

      <h2>1. Counter with useReducer</h2>
      <CounterReducer />

      <h2>2. Shopping Cart with useReducer</h2>
      <CartReducerDemo />
      <h2>28. Simplest useReducer</h2>
      <SimpleCounter />
      <h1>Tutorial 29 - Complex useReducer (Product Manager)</h1>
      <ProductManager />
    </div>
  );
}

export default App;
