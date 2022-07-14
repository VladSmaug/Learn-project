import { createRef } from "react";

import Post from "./Post";

import styles from "./MyPost.module.css";

const PostElements = ({ messageList }) =>
  messageList.map((post, index) => (
    <Post key={index} message={post.message} likes={post.likes} />
  ));

const newPostElement = () => {
  createRef();
};

const MyPost = ({ messageList }, { addPost }) => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <div>
      <textarea ref={newPostElement}></textarea>
    </div>
    <button onClick={() => {}}>Add Post</button>
    <PostElements messageList={messageList} />
  </div>
);

export default MyPost;
