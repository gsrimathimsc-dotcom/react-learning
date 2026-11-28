// cartReducer.js
// A pure function: same input → same output. No API calls, no changing the old state.

export const initialCartState = {
  items: [],
  coupon: null, // "TOY10" or null
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }
      return { ...state, items: [...state.items, { ...product, qty: 1 }] };
    }

    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item,
          )
          .filter((item) => item.qty > 0),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "APPLY_COUPON":
      return { ...state, coupon: action.payload };

    case "REMOVE_COUPON":
      return { ...state, coupon: null };

    case "CLEAR_CART":
      return initialCartState;

    default:
      throw new Error("Unknown action: " + action.type); // catches typos
  }
}
