import React from "react";
import MyInfo from "./MyInfo";

import MyPost from "./MyPost";

import styles from "./Profile.module.css";

const Profile = (props) => {
<<<<<<< HEAD
  const { messageList, addPost } = props;
=======
  const { messageList, addPost, newPost } = props;
>>>>>>> 8d3582e70b32c5eebf6b98804366e30b9156f876
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
