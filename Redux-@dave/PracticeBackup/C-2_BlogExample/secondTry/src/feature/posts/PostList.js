import React from "react";
import { useSelector } from "react-redux";
import Author from "./Author";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => {
    return (
      <div
        key={post.id}
        className="border-4 border-double border-gray-950 bg-slate-300 rounded-md p-4 mb-2 relative "
      >
        <h3>Title : {post.title}</h3>
        <p>Content : {post.content}</p>
        <Author userId={post.userId} />
        <TimeAgo className="absolute top-2 right-2" timeStamp={post.date} />
        <br />
        <ReactionButton post={post} />
      </div>
    );
  });

  return (
    <section className="w-3/4 m-auto mt-4 ">
      <h1>Blogs</h1>
      {renderPosts}
    </section>
  );
};

export default PostList;
