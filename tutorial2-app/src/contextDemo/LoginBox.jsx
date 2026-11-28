// LoginBox.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function LoginBox() {
  const { isLoggedIn, login, user } = useAuth();
  const { colors } = useTheme();
  const [name, setName] = useState("");

  if (isLoggedIn) {
    return (
      <p>
        Welcome, <b>{user.name}</b>! Happy shopping 🎉
      </p>
    );
  }

  function handleLogin(e) {
    e.preventDefault();
    if (name.trim() !== "") login(name.trim());
  }

  return (
    <form
      onSubmit={handleLogin}
      style={{
        backgroundColor: colors.card,
        padding: "10px",
        borderRadius: "6px",
        margin: "10px 0",
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name (try 'Admin')"
      />{" "}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginBox;
