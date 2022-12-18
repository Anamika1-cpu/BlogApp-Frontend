import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slices/users/userSlice";
import categoriesReducers from "../slices/category/categorySlice";
const store = configureStore({
  reducer: {
    users: usersReducers,
    category: categoriesReducers,
  },
});

export default store;
