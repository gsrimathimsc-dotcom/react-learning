// FormEvents.jsx
import { useState } from "react";

function FormEvents() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Soft Toys");
  const [agree, setAgree] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading
    if (name.trim() === "") {
      alert("Please enter a name");
      return;
    }
    setSubmitted({ name, category, agree });
  }

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="toyName">Toy Name: </label>
        <input
          id="toyName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocusedField("Toy Name")}
          onBlur={() => setFocusedField("")}
          style={{ borderColor: focusedField === "Toy Name" ? "blue" : "#ccc" }}
        />
        <br />
        <br />

        <label htmlFor="category">Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Soft Toys</option>
          <option>Vehicles</option>
          <option>Educational</option>
        </select>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)} // checked, not value
          />
          Gift wrap
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {focusedField && (
        <p style={{ color: "blue" }}>✏️ Editing: {focusedField}</p>
      )}

      {submitted && (
        <p style={{ color: "green" }}>
          ✅ Submitted: {submitted.name} | {submitted.category} | Gift wrap:{" "}
          {submitted.agree ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
}

export default FormEvents;
