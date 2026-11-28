// App.jsx
import DrillingProblem from "./propDrilling/DrillingProblem";
import ContextSolution from "./propDrilling/ContextSolution";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Tutorial 26 - Prop Drilling Problem</h1>

      <h2 style={{ color: "red" }}>❌ Problem: Prop Drilling</h2>
      <DrillingProblem />

      <h2 style={{ color: "green", marginTop: "30px" }}>✅ Solution: useContext</h2>
      <ContextSolution />
    </div>
  );
}

export default App;