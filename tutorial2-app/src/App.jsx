import UseStateDemo from "./UseStateDemo";
import StateUpdateDemo from "./StateUpdateDemo";
import SnapshotDemo from "./SnapshotDemo";
import PrevStateDemo from "./PrevStateDemo";
import BatchingDemo from "./BatchingDemo";
import ObjectStateDemo from "./ObjectStateDemo";
import ArrayStateDemo from "./ArrayStateDemo";

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
      <h1>Tutorial 24 - useState with Object</h1>
      <ObjectStateDemo />
      <h1>Tutorial 20 - useState with Arrays</h1>
      <ArrayStateDemo />
    </div>
  );
}

export default App;
