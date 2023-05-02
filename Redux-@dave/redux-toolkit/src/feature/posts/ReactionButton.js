import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "💚",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reactionName: name }))
        }
      >
        {emoji}
        {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>;
};

export default ReactionButton;
