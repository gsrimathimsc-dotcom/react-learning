import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";
import Button from "./Button";
import ArrowDemo from "./ArrowDemo";


function App() {
  return (
    <div>
      <HelloWorld />
      <Welcome name="Srimathi" course="React" />
      <Welcome name="Priya" course="JavaScript" />
      <Button/>
      <ArrowDemo />
    </div>
  );
}

export default App; 