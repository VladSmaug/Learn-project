import Post from "./Post";

import styles from "./MyPost.module.css";

const MyPost = () => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <textarea></textarea>
    <button>Add Post</button>
    <Post message="Hi how are you" likes="10" />;
    <Post message="Hello how are you?" likes="20" />;
  </div>
);

export default MyPost;
