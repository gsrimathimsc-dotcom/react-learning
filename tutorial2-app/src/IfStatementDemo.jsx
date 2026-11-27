// IfStatementDemo.jsx
// if statements can't go inside JSX, so they go BEFORE return.

function IfStatementDemo({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return (
      <div
        style={{ border: "1px solid green", padding: "10px", margin: "10px 0" }}
      >
        <h3>Welcome back, {name}!</h3>
        <button>Logout</button>
      </div>
    );
  } else {
    return (
      <div
        style={{ border: "1px solid red", padding: "10px", margin: "10px 0" }}
      >
        <h3>Please log in to continue</h3>
        <button>Login</button>
      </div>
    );
  }
}

export default IfStatementDemo;
