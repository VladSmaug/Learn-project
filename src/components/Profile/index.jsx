import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";
import MyPostContainer from "./MyPost/index container";

import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <div className={styles.content}>
        <MyInfo />
        <MyPostContainer store={props.store} messageList={props.messageList} />
      </div>
    </div>
  );
};
export default Profile;
