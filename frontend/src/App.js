import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import { useSelector } from "react-redux";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";
import Friends from "./pages/friends";
import Games from "./pages/games";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const [visible, setVisible] = useState(false);
  const { user, darkTheme } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: "",
  });
  const location = useLocation();
  
  useEffect(() => {
    getAllPosts();
  }, []);
  useEffect(() => {
    
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Come back :( " : "Dosthi";
      
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const routeTitles = {
      "/login": "Login",
      "/profile": "Profile",
      "/friends": "Friends",
      "/games": "Games",
      "/messenger": "Messenger",
      "/reset": "Reset",
      "/": "Home",
    };

    document.title = routeTitles[location.pathname] || "Dosthi";

  }, [location.pathname]);

  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `/api1/getAllposts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  console.log(posts)

  return (
    <div className={darkTheme && "dark"}>
    {visible && <CreatePostPopup user={user} setVisible={setVisible} posts={posts} dispatch={dispatch} />}
    <Routes>
      <Route element={<NotLoggedInRoutes />}>
        <Route path="/login" element={<Login />} exact />
      </Route>
      <Route element={<LoggedInRoutes />}>
        <Route
          path="/profile"
          element={<Profile user={user} setVisible={setVisible} />}
          exact
        />
        <Route
          path="/profile/:username"
          element={<Profile user={user} setVisible={setVisible} />}
          exact
        />
          <Route
            path="/friends"
            element={
              <Friends user={user} setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/games"
            element={
              <Games setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
            <Route
            path="/friends/:type"
            element={
              <Friends user={user} setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
        <Route
          path="/"
          element={<Home user={user} setVisible={setVisible} posts={posts} />}
          exact
        />
          <Route
          path="/messenger"
          element={<Messenger user={user} setVisible={setVisible} />}
          exact
        />
        {/* <Route path="/activate/:token" element={<Activate />} exact /> */}
      </Route>
      <Route path="/reset" element={<Reset />} />
    </Routes>
  </div>
  );
}

export default App;
