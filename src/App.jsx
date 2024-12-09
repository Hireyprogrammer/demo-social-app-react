import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./postReducer";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const [user, setUser] = useState("Hirey");
  const [posts, setPosts] = useState([]);

  const initialState = useContext(PostContext);

  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    document.title = user ? `${user}Feed` : "Please-Login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
          <Header setUser={setUser} />
          <CreatePost user={user} posts={posts} />

          <PostList />
        </UserContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
