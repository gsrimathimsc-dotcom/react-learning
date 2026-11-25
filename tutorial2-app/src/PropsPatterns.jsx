// PropsPatterns.jsx
import CardWrapper from "./CardWrapper";

// ---------- Pattern 1: Default Props ----------
// If the parent doesn't send name or role, the default values are used.
function Greeting({ name = "Guest", role = "Student" }) {
  return (
    <p>
      Hello, <b>{name}</b>! You are logged in as <i>{role}</i>.
    </p>
  );
}

// ---------- Pattern 2: Forwarding Props with the Spread Operator ----------
// label and variant are used here. Everything else (onClick, disabled, title...)
// is collected in "rest" and passed on to the real <button>.
function Button({ label, variant = "primary", ...rest }) {
  const colors = {
    primary: "#1976d2",
    danger: "#d32f2f",
    success: "#2e7d32"
  };

  return (
    <button
      style={{
        backgroundColor: colors[variant],
        color: "white",
        border: "none",
        padding: "8px 16px",
        margin: "4px",
        borderRadius: "4px",
        cursor: rest.disabled ? "not-allowed" : "pointer",
        opacity: rest.disabled ? 0.5 : 1
      }}
      {...rest}
    >
      {label}
    </button>
  );
}

// ---------- Pattern 3: Passing JSX as Children ----------
function Highlight({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#fff8e1",
        borderLeft: "4px solid #ffb300",
        padding: "10px"
      }}
    >
      {children}
    </div>
  );
}

// ---------- Pattern 4: Nested Components (User Profile) ----------
function Avatar({ name, size = 60 }) {
  // First letters of the name, e.g. "G Srimathi" → "GS"
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#1976d2",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size / 3,
        fontWeight: "bold"
      }}
    >
      {initials}
    </div>
  );
}

function UserDetails({ name, email, city, skills = [] }) {
  return (
    <div>
      <h3 style={{ margin: "0 0 5px" }}>{name}</h3>
      <p style={{ margin: "2px 0" }}>Email: {email}</p>
      <p style={{ margin: "2px 0" }}>City: {city}</p>
      <p style={{ margin: "2px 0" }}>Skills: {skills.join(", ")}</p>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <Avatar name={user.name} />
      {/* Spread an object: every property of user becomes a prop */}
      <UserDetails {...user} />
    </div>
  );
}

// ---------- Main component: shows every pattern ----------
function PropsPatterns() {
  const user = {
    name: "G Srimathi",
    email: "srimathi@example.com",
    city: "Chennai",
    skills: ["React", "JavaScript", "Testing"]
  };

  const buttonProps = {
    label: "Spread Button",
    variant: "success",
    title: "All my props came from one object"
  };

  return (
    <div>
      {/* 1. Default props */}
      <CardWrapper title="1. Default Props">
        <Greeting name="Srimathi" role="Trainer" />
        <Greeting />
        <Greeting name="Ravi" />
      </CardWrapper>

      {/* 2. Forwarding props with spread */}
      <CardWrapper title="2. Forwarding Props (Spread Operator)">
        <Button label="Save" onClick={() => alert("Saved!")} />
        <Button label="Delete" variant="danger" title="Delete this item" onClick={() => alert("Deleted!")} />
        <Button label="Disabled" disabled />
        <Button {...buttonProps} />
      </CardWrapper>

      {/* 3. JSX as children, plus JSX as a normal prop (footer) */}
      <CardWrapper
        title="3. Passing JSX as Children"
        footer={<small>This footer was passed as a JSX prop</small>}
      >
        <Highlight>
          <h4 style={{ margin: "0 0 5px" }}>Note</h4>
          <p style={{ margin: 0 }}>
            Anything written between the opening and closing tags is received as <b>children</b>.
          </p>
        </Highlight>
      </CardWrapper>

      {/* 4. Nested components, with a style forwarded to CardWrapper */}
      <CardWrapper
        title="4. Nested Components - User Profile"
        style={{ borderColor: "#2e7d32", backgroundColor: "#f1f8e9" }}
        id="user-profile-card"
      >
        <UserProfile user={user} />
      </CardWrapper>
    </div>
  );
}

export default PropsPatterns;