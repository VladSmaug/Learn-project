import Post from "./Post";

import styles from "./MyPost.module.css";

const postData = [
  { message: "Hi how are you", likes: 10, id: 1 },
  { message: "Hello how are you?", likes: 20, id: 2 },
];

const MyPost = () => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <textarea></textarea>
    <button>Add Post</button>
    <Post message={postData[0].message} likes={postData[0].likes} />;
    <Post message={postData[1].message} likes={postData[1].likes} />;
  </div>
);

export default MyPost;
