import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";
import Button from "./Button";


function App() {
  return (
    <div>
      <HelloWorld />
      <Welcome name="Srimathi" course="React" />
      <Welcome name="Priya" course="JavaScript" />
      <Button/>
    </div>
  );
}

export default App;