import HelloWorld from "./HelloWorld";      // remove if you don't have HelloWorld.jsx
import Welcome from "./Welcome";
import Button from "./Button";
import ArrowDemo from "./ArrowDemo";
import PropsPatterns from "./PropsPatterns";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>React Learning - All Tutorials</h1>

      <HelloWorld />

      <Welcome name="Srimathi" course="React" />
      <Welcome name="Priya" course="JavaScript" />

      <Button />

      <ArrowDemo />

      
      <PropsPatterns />
    </div>
  );
}

export default App;