import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postSlice";
import userReducer from "../feature/users/userSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
