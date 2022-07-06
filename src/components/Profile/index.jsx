import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={styles.content}>
        <MyInfo />
        <MyPost />
      </div>
    </div>
  );
};
export default Profile;
