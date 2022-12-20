import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slices/users/userSlice";
import categoriesReducers from "../slices/category/categorySlice";
import post from "../slices/post/postSlices";
const store = configureStore({
  reducer: {
    users: usersReducers,
    category: categoriesReducers,
    post,
  },
});

export default store;
