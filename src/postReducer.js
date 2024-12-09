const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ NEW_POST": {
      const newPost = action.payload.post;
      return { posts: [newPost, ...state.posts] };
    }
    case "DELETE_POST": {
      let deletingPostId = action.payload.postid;
      const newPost = state.posts.filter((post) => post.id !== deletingPostId);
      return { posts: newPost };
    }

    default: {
      return state;
    }
  }
};

export default postReducer;
