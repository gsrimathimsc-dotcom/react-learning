// App.jsx
import IfStatementDemo from "./IfStatementDemo";
import TernaryDemo from "./TernaryDemo";
import AndOperatorDemo from "./AndOperatorDemo";
import VariableDemo from "./VariableDemo";

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
      <h1>Tutorial 9 - Conditional Rendering</h1>

      <h2>1. if Statement</h2>
      <IfStatementDemo isLoggedIn={true} name="Srimathi" />
      <IfStatementDemo isLoggedIn={false} />

      <h2>2. Ternary Operator</h2>
      <TernaryDemo title="Teddy Bear" price={499} inStock={true} />
      <TernaryDemo title="Remote Control Car" price={1299} inStock={false} />

      <h2>3. && Operator</h2>
      <AndOperatorDemo
        name="Srimathi"
        isAdmin={true}
        cartCount={3}
        discount={10}
      />
      <AndOperatorDemo
        name="Priya"
        isAdmin={false}
        cartCount={0}
        discount={0}
      />

      <h2>4. Variables for Complex Logic</h2>
      <VariableDemo orderId={101} status="placed" amount={450} />
      <VariableDemo orderId={102} status="shipped" amount={750} />
      <VariableDemo orderId={103} status="delivered" amount={1500} />
      <VariableDemo orderId={104} status="cancelled" amount={300} />
    </div>
  );
}

export default App;
