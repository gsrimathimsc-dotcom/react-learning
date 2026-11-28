// wishlistReducer.js
const STORAGE_KEY = "toyWishlist";

// init function: reads localStorage ONLY on the first render
export function loadWishlist(defaultItems) {
  console.log("📂 Reading wishlist from localStorage (runs once)");
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { items: defaultItems };
  } catch {
    return { items: defaultItems }; // if the saved data is broken, use the defaults
  }
}

export function saveWishlist(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage may be full or blocked, so just ignore it
  }
}

export function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}
