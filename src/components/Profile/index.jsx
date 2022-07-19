import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";

import styles from "./Profile.module.css";

const Profile = (props) => {
  const { messageList, addPost, updateNewPostText } = props;
  return (
    <div>
      <div className={styles.content}>
        <MyInfo />
        <MyPost
          addPost={addPost}
          messageList={messageList}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};
export default Profile;
