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

const MyPost = ({ messageList, newPost }) => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <div>
      <textarea value={newPost} ref={areaRef} />
    </div>
    <button onClick={addPostHandler}>Add Post</button>
    <PostElements messageList={messageList} />
  </div>
);

export default MyPost;
