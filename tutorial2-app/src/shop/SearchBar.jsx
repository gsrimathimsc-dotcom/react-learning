// SearchBar.jsx
// Has NO state of its own. It shows the value from the parent
// and tells the parent when the text changes.

function SearchBar({ searchText, onSearch }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍 Search toys..."
        style={{ padding: "8px", width: "250px" }}
      />{" "}
      {searchText && <button onClick={() => onSearch("")}>Clear</button>}
    </div>
  );
}

export default SearchBar;
