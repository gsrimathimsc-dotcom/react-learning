// ThemeContext.jsx
import { createContext, useContext, useState } from "react";

// Step 1: create the context
const ThemeContext = createContext(null);

// Step 2: the Provider component holds the state and shares it
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const colors =
    theme === "light"
      ? { background: "#ffffff", text: "#000000", card: "#f5f5f5" }
      : { background: "#1e1e1e", text: "#ffffff", card: "#333333" };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: a custom hook makes it easy (and safe) to use
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return context;
}