import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";
import productsReducer from "./productsSlice.js";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;