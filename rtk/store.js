import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: postsReducer,
});

export default store;
