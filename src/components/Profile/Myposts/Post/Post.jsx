import React from "react";
import "./Post.css";
const Post = (props) => {
  return (
    <div className="item">
      <img
        src="https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W"
        alt=""
      />
      {props.message}
      {props.likes}
    </div>
  );
};
export default Post;
