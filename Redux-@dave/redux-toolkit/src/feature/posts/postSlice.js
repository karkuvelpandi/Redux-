import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const initialState = [
  {
    id: 1,
    title: "Blog one",
    content: "learning redux/toolkit",
    timeAgo: moment().subtract(10, "minutes").fromNow(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
  {
    id: 2,
    title: "Blog two",
    content: "learning redux saga",
    timeAgo: moment().subtract(5, "minutes").fromNow(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    addReaction: (state, action) => {
      const { postId, reactionName } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reactionName]++;
      }
    },
  },
});

export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
