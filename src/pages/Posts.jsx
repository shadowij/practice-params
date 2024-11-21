import React from "react";
import { Link, useParams } from "react-router-dom";

function Posts() {
  const { postID } = useParams();
  console.log(useParams());
  console.log(postID);
  return (
    <>
      <div>posts is here {postID}</div>
      <Link to='/post'> back to post</Link>
    </>
  );
}

export default Posts;
