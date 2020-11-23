import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const Mypost = (props) => {

  const postElement = props.posts.map((item) => (
    <Post message={item.message} likes={item.likes} />
  ));
  return (
    <div>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className="posts">
        {postElement}
      </div>
    </div>
  );
};
export default Mypost;
