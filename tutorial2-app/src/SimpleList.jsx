// SimpleList.jsx
// .map() turns each array item into a JSX element.

function SimpleList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* The index (position number) is the second parameter of map */}
      <h3>Numbered</h3>
      {fruits.map((fruit, index) => (
        <p key={fruit}>
          {index + 1}. {fruit}
        </p>
      ))}
    </div>
  );
}

export default SimpleList;
