import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

//action
export const createCategoryAction = createAsyncThunk(
  "category/create",
  async (category, { getState, rejectWithValue, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    console.log(user);
    //http call
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/category`,
        {
          title: category?.title,
        },
        config
      );
      return data;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);

//SLICES

const categorySlices = createSlice({
  name: "category",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.category = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});
export default categorySlices.reducer;
