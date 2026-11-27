// App.jsx
import InlineStyle from "./InlineStyle";
import ExternalCSS from "./ExternalCSS";
import CSSModule from "./CSSModule";
import DynamicStyle from "./DynamicStyle";

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
    </div>
  );
}

export default App;
