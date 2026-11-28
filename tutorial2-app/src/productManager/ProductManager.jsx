// ProductManager.jsx
import { useReducer, useEffect } from "react";
import { ACTIONS } from "./productTypes";
import {
  productReducer,
  initialState,
  getVisibleProducts,
} from "./productReducer";

const CATEGORIES = ["Soft Toys", "Vehicles", "Educational", "Puzzles"];

const sampleProducts = [
  {
    id: 1,
    name: "Teddy Bear",
    price: 499,
    category: "Soft Toys",
    inStock: true,
  },
  { id: 2, name: "RC Car", price: 1299, category: "Vehicles", inStock: false },
  {
    id: 3,
    name: "Building Blocks",
    price: 799,
    category: "Educational",
    inStock: true,
  },
  {
    id: 4,
    name: "Jigsaw Puzzle",
    price: 349,
    category: "Puzzles",
    inStock: true,
  },
  { id: 5, name: "Toy Train", price: 999, category: "Vehicles", inStock: true },
];

// Pretend API call: success, or an error if shouldFail is true
function loadProducts(dispatch, shouldFail = false) {
  dispatch({ type: ACTIONS.FETCH_START });
  return setTimeout(() => {
    if (shouldFail) {
      dispatch({
        type: ACTIONS.FETCH_ERROR,
        payload: "Could not load products. Server not responding.",
      });
    } else {
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: sampleProducts });
    }
  }, 1200);
}

const box = {
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "10px",
  margin: "10px 0",
};

// ================= CHILD 1: Form (add / edit) =================
function ProductForm({ form, editingId, dispatch }) {
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: ACTIONS.FORM_CHANGE,
      payload: { field: name, value: type === "checkbox" ? checked : value },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation happens in the component, before dispatching
    if (form.name.trim() === "" || Number(form.price) <= 0) {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        payload: "⚠️ Enter a name and a price above 0",
      });
      return;
    }

    const product = {
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
      inStock: form.inStock,
    };

    if (editingId) {
      dispatch({ type: ACTIONS.UPDATE_PRODUCT, payload: product });
    } else {
      // The id is created HERE, not in the reducer, so the reducer stays pure
      dispatch({
        type: ACTIONS.ADD_PRODUCT,
        payload: { ...product, id: Date.now() },
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ ...box, backgroundColor: editingId ? "#fff8e1" : "white" }}
    >
      <h3 style={{ marginTop: 0 }}>
        {editingId ? "✏️ Edit Product" : "➕ Add Product"}
      </h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />{" "}
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        style={{ width: "80px" }}
      />{" "}
      <select name="category" value={form.category} onChange={handleChange}>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>{" "}
      <label>
        <input
          name="inStock"
          type="checkbox"
          checked={form.inStock}
          onChange={handleChange}
        />{" "}
        In Stock
      </label>{" "}
      <button type="submit">{editingId ? "Update" : "Add"}</button>{" "}
      {editingId && (
        <button
          type="button"
          onClick={() => dispatch({ type: ACTIONS.CANCEL_EDIT })}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

// ================= CHILD 2: Toolbar (search / filter / sort / undo) =================
function Toolbar({ searchText, filterCategory, sortBy, canUndo, dispatch }) {
  return (
    <div style={box}>
      <input
        value={searchText}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SET_SEARCH, payload: e.target.value })
        }
        placeholder="🔍 Search"
      />{" "}
      <select
        value={filterCategory}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SET_FILTER, payload: e.target.value })
        }
      >
        <option>All</option>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>{" "}
      <select
        value={sortBy}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SET_SORT, payload: e.target.value })
        }
      >
        <option value="none">No sort</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="name">Name A → Z</option>
      </select>{" "}
      <button
        onClick={() => dispatch({ type: ACTIONS.UNDO })}
        disabled={!canUndo}
      >
        ↩️ Undo
      </button>{" "}
      <button onClick={() => loadProducts(dispatch)}>🔄 Reload</button>{" "}
      <button onClick={() => loadProducts(dispatch, true)}>
        💥 Simulate Error
      </button>
    </div>
  );
}

// ================= CHILD 3: Table =================
function ProductTable({ products, editingId, dispatch }) {
  if (products.length === 0) {
    return <p style={{ color: "gray" }}>No products match.</p>;
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#e3f2fd", textAlign: "left" }}>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr
            key={p.id}
            style={{
              borderBottom: "1px solid #eee",
              backgroundColor: p.id === editingId ? "#fff8e1" : "white",
            }}
          >
            <td>{p.name}</td>
            <td>₹{p.price}</td>
            <td>{p.category}</td>
            <td>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.TOGGLE_STOCK, payload: p.id })
                }
              >
                {p.inStock ? "✅ In" : "❌ Out"}
              </button>
            </td>
            <td>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.START_EDIT, payload: p.id })
                }
              >
                ✏️
              </button>{" "}
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: p.id })
                }
              >
                🗑
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ================= CHILD 4: Stats =================
function Stats({ products }) {
  const inStock = products.filter((p) => p.inStock).length;
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  return (
    <p>
      📦 Total: <b>{products.length}</b> | ✅ In stock: <b>{inStock}</b> | ❌
      Out: <b>{products.length - inStock}</b> | 💰 Value: <b>₹{totalValue}</b>
    </p>
  );
}

// ================= PARENT =================
function ProductManager() {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Load the products once, when the component first appears
  useEffect(() => {
    const timer = loadProducts(dispatch);
    return () => clearTimeout(timer);
  }, []);

  // Clear the message automatically after 2.5 seconds
  useEffect(() => {
    if (!state.message) return;
    const timer = setTimeout(
      () => dispatch({ type: ACTIONS.SET_MESSAGE, payload: "" }),
      2500,
    );
    return () => clearTimeout(timer);
  }, [state.message]);

  const visibleProducts = getVisibleProducts(state);

  return (
    <div>
      {state.message && (
        <div
          style={{ ...box, backgroundColor: "#e8f5e9", borderColor: "green" }}
        >
          {state.message}
        </div>
      )}

      <ProductForm
        form={state.form}
        editingId={state.editingId}
        dispatch={dispatch}
      />

      <Toolbar
        searchText={state.searchText}
        filterCategory={state.filterCategory}
        sortBy={state.sortBy}
        canUndo={state.history.length > 0}
        dispatch={dispatch}
      />

      {state.loading && <p>⏳ Loading products...</p>}

      {state.error && (
        <div style={{ ...box, backgroundColor: "#ffebee", borderColor: "red" }}>
          ❌ {state.error}{" "}
          <button onClick={() => loadProducts(dispatch)}>Try Again</button>
        </div>
      )}

      {!state.loading && !state.error && (
        <>
          <Stats products={state.products} />
          <ProductTable
            products={visibleProducts}
            editingId={state.editingId}
            dispatch={dispatch}
          />
        </>
      )}

      <details style={{ marginTop: "15px" }}>
        <summary>🔍 View full state (for learning)</summary>
        <pre style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
          {JSON.stringify(
            { ...state, history: `${state.history.length} saved version(s)` },
            null,
            2,
          )}
        </pre>
      </details>
    </div>
  );
}

export default ProductManager;
