import React from "react";
import Mypost from "./Myposts/MyPosts";
import "./Profile.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {

  return (
    <div className="content">
      <ProfileInfo />
      <Mypost posts={props.state.posts} />
    </div>
  );
};
export default Profile;
