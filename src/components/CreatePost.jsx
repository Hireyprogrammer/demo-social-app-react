import React, { useContext, useRef, useState } from "react";
import { PostContext } from "../App";

function CreatePost({ user, posts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const imageRef = useRef();
  const contentRef = useRef();
  const { dispatch } = useContext(PostContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = { content, image, user, id: Date.now() };

    // setPosts([newPost, ...posts]);
    dispatch({ type: "ADD_ NEW_POST", payload: { post: newPost } });
    setContent("");
    setImage(null);
    imageRef.current.value = "";
    contentRef.current.focus();
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post content"
          onChange={(event) => {
            setContent(event.target.value);
          }}
          value={content}
          ref={contentRef}
        />
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
          ref={imageRef}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
