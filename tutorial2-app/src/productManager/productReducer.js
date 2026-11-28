// productReducer.js
import { ACTIONS } from "./productTypes";

export const emptyForm = {
  name: "",
  price: "",
  category: "Soft Toys",
  inStock: true,
};

export const initialState = {
  products: [],
  loading: false,
  error: null,
  form: emptyForm,
  editingId: null, // null = adding, a number = editing that product
  searchText: "",
  filterCategory: "All",
  sortBy: "none",
  history: [], // earlier product lists, for undo
  message: "",
};

// Helper: save the current list to history before changing it (keeps the last 10)
function withHistory(state, newProducts, message) {
  return {
    ...state,
    products: newProducts,
    history: [...state.history, state.products].slice(-10),
    message,
  };
}

export function productReducer(state, action) {
  switch (action.type) {
    // ---------- LOADING ----------
    case ACTIONS.FETCH_START:
      return { ...state, loading: true, error: null };

    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        history: [],
      };

    case ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    // ---------- PRODUCTS ----------
    case ACTIONS.ADD_PRODUCT: {
      const newProducts = [...state.products, action.payload];
      return {
        ...withHistory(state, newProducts, `✅ "${action.payload.name}" added`),
        form: emptyForm,
      };
    }

    case ACTIONS.UPDATE_PRODUCT: {
      const newProducts = state.products.map((p) =>
        p.id === state.editingId ? { ...p, ...action.payload } : p,
      );
      return {
        ...withHistory(
          state,
          newProducts,
          `✏️ "${action.payload.name}" updated`,
        ),
        form: emptyForm,
        editingId: null,
      };
    }

    case ACTIONS.DELETE_PRODUCT: {
      const deleted = state.products.find((p) => p.id === action.payload);
      const newProducts = state.products.filter((p) => p.id !== action.payload);
      const wasEditing = state.editingId === action.payload;
      return {
        ...withHistory(state, newProducts, `🗑 "${deleted?.name}" deleted`),
        editingId: wasEditing ? null : state.editingId,
        form: wasEditing ? emptyForm : state.form,
      };
    }

    case ACTIONS.TOGGLE_STOCK: {
      const newProducts = state.products.map((p) =>
        p.id === action.payload ? { ...p, inStock: !p.inStock } : p,
      );
      return withHistory(state, newProducts, "🔁 Stock status changed");
    }

    // ---------- FORM ----------
    case ACTIONS.FORM_CHANGE: {
      const { field, value } = action.payload;
      return { ...state, form: { ...state.form, [field]: value } };
    }

    case ACTIONS.START_EDIT: {
      const product = state.products.find((p) => p.id === action.payload);
      if (!product) return state;
      return {
        ...state,
        editingId: product.id,
        form: {
          name: product.name,
          price: String(product.price),
          category: product.category,
          inStock: product.inStock,
        },
        message: "",
      };
    }

    case ACTIONS.CANCEL_EDIT:
      return { ...state, editingId: null, form: emptyForm };

    // ---------- SEARCH / FILTER / SORT ----------
    case ACTIONS.SET_SEARCH:
      return { ...state, searchText: action.payload };

    case ACTIONS.SET_FILTER:
      return { ...state, filterCategory: action.payload };

    case ACTIONS.SET_SORT:
      return { ...state, sortBy: action.payload };

    // ---------- UNDO ----------
    case ACTIONS.UNDO: {
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      return {
        ...state,
        products: previous,
        history: state.history.slice(0, -1),
        editingId: null,
        form: emptyForm,
        message: "↩️ Last change undone",
      };
    }

    // ---------- MESSAGE ----------
    case ACTIONS.SET_MESSAGE:
      return { ...state, message: action.payload };

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

// Selector: works out the visible list from the state (filter + search + sort)
export function getVisibleProducts(state) {
  let list = state.products;

  if (state.filterCategory !== "All") {
    list = list.filter((p) => p.category === state.filterCategory);
  }

  if (state.searchText.trim() !== "") {
    const text = state.searchText.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(text));
  }

  if (state.sortBy === "priceLow")
    list = [...list].sort((a, b) => a.price - b.price);
  if (state.sortBy === "priceHigh")
    list = [...list].sort((a, b) => b.price - a.price);
  if (state.sortBy === "name")
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  return list;
}
