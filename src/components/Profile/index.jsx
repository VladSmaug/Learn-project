import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";

import styles from "./Profile.module.css";

const Profile = ({ messageList }, { addPost }) => {
  return (
    <div>
      <div className={styles.content}>
        <MyInfo />
        <MyPost addPost={addPost} messageList={messageList} />
      </div>
    </div>
  );
};
export default Profile;
