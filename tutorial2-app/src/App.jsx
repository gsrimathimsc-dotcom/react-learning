// App.jsx
import InlineStyle from "./InlineStyle";
import ExternalCSS from "./ExternalCSS";
import CSSModule from "./CSSModule";
import DynamicStyle from "./DynamicStyle";
import ClickEvents from "./ClickEvents";
import MouseEvents from "./MouseEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";
import OtherEvents from "./OtherEvents";
import EventProps from "./EventProps";

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
      <h1>Tutorial 12 - Styling React Components</h1>

      <h2>1. Inline Styles</h2>
      <InlineStyle />

      <h2>2. External CSS File</h2>
      <ExternalCSS />

      <h2>3. CSS Modules</h2>
      <CSSModule />

      <h2>4. Conditional / Dynamic Styles</h2>
      <DynamicStyle />
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
      <h2>6. Event Handlers as Props</h2>
      <EventProps />
    </div>
  );
}

export default App;
