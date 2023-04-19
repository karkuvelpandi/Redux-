import React from "react";
import PostList from "./feature/posts/PostList";
import AddPostForm from "./feature/posts/AddPostForm";
const App = () => {
  return (
    <>
      <AddPostForm />
      <PostList />
    </>
  );
};

export default App;
