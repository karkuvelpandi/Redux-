import React from "react";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
import { useSelector } from "react-redux";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
          userId,
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
          },
        })
      );
      setTitle("");
      setContent("");
    }
  };

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center w-3/4 m-auto"
      >
        <label htmlFor="postTitle">Title :</label>
        <input
          className="border-2 border-black"
          type="text"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="postAuthor">Author :</label>
        <select
          className="border-2 border-black"
          name="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {options}
        </select>
        <label htmlFor="postContent">Content :</label>
        <input
          className="border-2 border-black"
          type="text"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button className="bg-black text-white p-1" onClick={onSavePost}>
          Save Blog
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
