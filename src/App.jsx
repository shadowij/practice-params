import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Posts from "./pages/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:postID" element={<Posts/>}/>
      <Route element={<PostPage />} path="/post"></Route>
    </Routes>
  );
}

export default App;
