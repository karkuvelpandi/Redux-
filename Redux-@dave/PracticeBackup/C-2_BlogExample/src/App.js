import React from "react";
import PostList from "./feature/post/PostList";
import AddPostForm from "./feature/post/AddPostForm";
const App = () => {
  return (
    <>
      <AddPostForm />
      <PostList />
    </>
  );
};

export default App;
