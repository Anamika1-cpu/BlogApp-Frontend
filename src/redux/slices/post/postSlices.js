import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { create } from "yup/lib/Reference";
import { baseUrl } from "../../../utils/baseUrl";

//Action to redirect
const resetPost = createAction("category/reset");
//Create POST ACtion
export const createPostAction = createAsyncThunk(
  "post/created",
  async (posts, { getState, rejectWithValue, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    console.log(user);

    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const formPostData = new FormData();
      formPostData.append("title", posts?.title);
      formPostData.append("description", posts?.description);
      formPostData.append("category", posts?.category);
      formPostData.append("image", posts?.image);
      const { data } = await axios.post(
        `${baseUrl}/api/posts`,
        formPostData,
        config
      );
      dispatch(resetPost());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Fectch POST ACtion
export const fetchPostsAtion = createAsyncThunk(
  "post/list",
  async (posts, { getState, rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //http call
      const { data } = await axios.get(`${baseUrl}/api/posts`, posts, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//SLICES
const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: (builder) => {
    //create post
    builder.addCase(createPostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetPost, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isCreated = false;
      state.postCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    //fetch posts

    builder.addCase(fetchPostsAtion.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchPostsAtion.fulfilled, (state, action) => {
      state.loading = false;
      state.postLists = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostsAtion.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.payload?.message;
    });
  },
});

export default postSlice.reducer;
