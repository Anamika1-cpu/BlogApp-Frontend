import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slices/users/userSlice";
const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});

export default store;
