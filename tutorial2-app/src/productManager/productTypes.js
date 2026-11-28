// productTypes.js
// Keeping action names in one place avoids typo bugs like "ADD_PRODCUT".

export const ACTIONS = {
  // loading (API style)
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",

  // products
  ADD_PRODUCT: "ADD_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  TOGGLE_STOCK: "TOGGLE_STOCK",

  // form
  FORM_CHANGE: "FORM_CHANGE",
  START_EDIT: "START_EDIT",
  CANCEL_EDIT: "CANCEL_EDIT",

  // search, filter, sort
  SET_SEARCH: "SET_SEARCH",
  SET_FILTER: "SET_FILTER",
  SET_SORT: "SET_SORT",

  // other
  UNDO: "UNDO",
  SET_MESSAGE: "SET_MESSAGE"
};