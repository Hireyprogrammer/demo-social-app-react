import React, { useContext } from "react";
import { PostContext, UserContext } from "../App";

function Post({ content, image, user, id }) {
  const userValue = useContext(UserContext);

  const { dispatch } = useContext(PostContext);

  const currUser = userValue === user;

  console.log("Is current user:", currUser);

  const handleDelete = () => {
    if (window.confirm("Are You sure want to delete "))
      dispatch({ type: "DELETE_POST", payload: { postid: id } });
  };

  return (
    <div>
      <div>
        <p>{content}</p>

        {image && (
          <img
            src={URL.createObjectURL(image)}
            style={{ width: 200 }}
            alt="Post image"
          />
        )}

        <p style={currUser ? { color: "green" } : {}}>{user}</p>

        {currUser && <button onClick={handleDelete}>Delete</button>}
      </div>
    </div>
  );
}

export default Post;
