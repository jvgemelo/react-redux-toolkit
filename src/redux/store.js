import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";

const store = configureStore({
  reducer: {
    data: {
        users: usersReducer,
    }
  },
});

export default store;