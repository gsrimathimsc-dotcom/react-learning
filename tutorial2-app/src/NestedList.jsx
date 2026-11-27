// NestedList.jsx
// Each category has its own array of toys, so there's a map inside a map.

function NestedList() {
  const categories = [
    { id: 1, name: "Soft Toys", toys: ["Teddy Bear", "Bunny", "Panda"] },
    { id: 2, name: "Vehicles", toys: ["RC Car", "Train Set"] },
    {
      id: 3,
      name: "Educational",
      toys: ["Puzzle", "Blocks", "Abacus", "Globe"],
    },
  ];

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>Toys by Category</h3>
      {categories.map((category) => (
        <div key={category.id}>
          {" "}
          {/* outer key */}
          <h4 style={{ margin: "8px 0 2px", color: "#1976d2" }}>
            {category.name} ({category.toys.length})
          </h4>
          <ul style={{ margin: 0 }}>
            {category.toys.map((toy) => (
              <li key={toy}>{toy}</li> // inner key
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList;
