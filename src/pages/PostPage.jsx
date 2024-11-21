import React from "react";
import { Link } from "react-router-dom";

function PostPage() {
  return (
    <>
      <div>Post page</div>
      <Link to="/post/1"> post 1</Link>
      <Link to="/post/2"> post 2</Link>
      <Link to="/post/3"> post 3</Link>
    </>
  );
}

export default PostPage;
