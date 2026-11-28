import UseStateDemo from "./UseStateDemo";
import StateUpdateDemo from "./StateUpdateDemo";
import SnapshotDemo from "./SnapshotDemo";
import PrevStateDemo from "./PrevStateDemo";
import BatchingDemo from "./BatchingDemo";
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
      <h1>Tutorial 19/ 20 - How State Updates Work</h1>
      <StateUpdateDemo />
      <h1>Tutorial 21 - State as a Snapshot</h1>
      <SnapshotDemo />
      <h1>Tutorial 22 - setState with Previous State</h1>
      <PrevStateDemo />
      <h1>Tutorial 23 - React Batches Updates</h1>
      <BatchingDemo />
    </div>
  );
}

export default App;
