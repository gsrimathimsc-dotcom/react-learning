// FilterList.jsx
// .filter() keeps only the items that match a condition,
// .map() displays them, and an empty list gets a friendly message.

function FilterList() {
  const students = [
    { id: 1, name: "Srimathi", marks: 92 },
    { id: 2, name: "Priya", marks: 45 },
    { id: 3, name: "Ravi", marks: 78 },
    { id: 4, name: "Kumar", marks: 30 },
    { id: 5, name: "Anitha", marks: 85 }
  ];

  // Logic goes BEFORE return
  const passed = students.filter((s) => s.marks >= 50);
  const failed = students.filter((s) => s.marks < 50);
  const distinction = students.filter((s) => s.marks >= 95);   // nobody matches

  // Sort a COPY with [...], so the original array isn't changed
  const ranked = [...students].sort((a, b) => b.marks - a.marks);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>✅ Passed ({passed.length})</h3>
      <ul>
        {passed.map((s) => (
          <li key={s.id}>{s.name} - {s.marks}</li>
        ))}
      </ul>

      <h3>❌ Failed ({failed.length})</h3>
      <ul>
        {failed.map((s) => (
          <li key={s.id} style={{ color: "red" }}>{s.name} - {s.marks}</li>
        ))}
      </ul>

      <h3>🏆 Rank List</h3>
      <ol>
        {ranked.map((s) => (
          <li key={s.id}>{s.name} - {s.marks}</li>
        ))}
      </ol>

      <h3>⭐ Distinction (95+)</h3>
      {/* Empty list: show a message instead of nothing */}
      {distinction.length === 0 ? (
        <p style={{ color: "gray" }}>No students scored 95 or above.</p>
      ) : (
        <ul>
          {distinction.map((s) => (
            <li key={s.id}>{s.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterList;