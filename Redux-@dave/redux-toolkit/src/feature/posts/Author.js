import React from "react";
import { useSelector } from "react-redux";

const Author = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const author = users.find((user) => user.id === userId);
  return <span>by <i>{author?author.name:"Unknown Author"}</i></span>;
};

export default Author;
