import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPost = orderedPosts.map((post) => {
    return (
      <section key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>

        <ReactionButton post={post} />
      </section>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderPost}
    </section>
  );
};

export default PostList;
