import { createRef } from "react";

import Post from "./Post";
import { addPost } from "./../../../redux/state";

import styles from "./MyPost.module.css";

const PostElements = ({ messageList }) =>
  messageList.map((post, index) => (
    <Post key={index} message={post.message} likes={post.likes} />
  ));

const areaRef = createRef();

const addPostHandler = () => {
  const text = areaRef.current.value;
  console.log(text);
  addPost(text);
};

<<<<<<< HEAD
const MyPost = ({ messageList }) => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <div>
      <textarea ref={areaRef}></textarea>
=======
const onPostChange = () => {};

const MyPost = ({ messageList, newPost }) => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <div>
      <textarea onChange={onPostChange} value={newPost} ref={areaRef} />
>>>>>>> 8d3582e70b32c5eebf6b98804366e30b9156f876
    </div>
    <button onClick={addPostHandler}>Add Post</button>
    <PostElements messageList={messageList} />
  </div>
);

export default MyPost;
