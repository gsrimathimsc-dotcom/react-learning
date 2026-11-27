// App.jsx
import ClickEvents from "./ClickEvents";
import MouseEvents from "./MouseEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";
import OtherEvents from "./OtherEvents";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Tutorial 15 - Event Handling</h1>

      <h2>1. Click Events</h2>
      <ClickEvents />

      <h2>2. Mouse / Hover Events</h2>
      <MouseEvents />

      <h2>3. Keyboard Events</h2>
      <KeyboardEvents />

      <h2>4. Form Events</h2>
      <FormEvents />

      <h2>5. @Other Events@ (Copy, Paste, Scroll)</h2>
      <OtherEvents />
    </div>
  );
}

export default App;
