import UseStateDemo from "./UseStateDemo";
import StateUpdateDemo from "./StateUpdateDemo";

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
      <h1>Tutorial 18 - useState</h1>
      <UseStateDemo />
      <h1>Tutorial 20 - How State Updates Work</h1>
      <StateUpdateDemo />
    </div>
  );
}

export default App;
