import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("api/posts");
  const posts = await res.json();
  return posts;
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const response = await fetch("api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  console.log(id);
  await fetch(`api/posts/${id}`, { method: "DELETE" });
  return id;
});

export const editPost = createAsyncThunk("posts/editPost", async (post) => {
  const { id } = post;
  const response = await fetch(`api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" },
  });
  const newPost = await response.json();
  console.log(newPost);
  return newPost;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export default postsSlice.reducer;
