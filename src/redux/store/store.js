import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slices/users/userSlice";
import categoriesReducers from "../slices/category/categorySlice";
import post from "../slices/post/postSlices";
import comment from "../slices/comment/CommentSlice";
const store = configureStore({
  reducer: {
    users: usersReducers,
    category: categoriesReducers,
    post,
    comment,
  },
});

export default store;
