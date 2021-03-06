import React from "react";
import { ProfileLocalStateType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props: ProfileLocalStateType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts newPostText={props.newPostText} posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      </div>
   );
}

export default Profile;