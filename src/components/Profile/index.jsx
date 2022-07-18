import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";

import styles from "./Profile.module.css";

const Profile = (props) => {
  const { messageList, addPost, newPost } = props;
  return (
    <div>
      <div className={styles.content}>
        <MyInfo />
        <MyPost addPost={addPost} newPost={newPost} messageList={messageList} />
      </div>
    </div>
  );
};
export default Profile;
