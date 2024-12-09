import React, { useContext } from "react";

import Post from "./Post";
import { PostContext } from "../App";

function PostList() {
  const { state } = useContext(PostContext);
  return (
    <div>
      {state.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
