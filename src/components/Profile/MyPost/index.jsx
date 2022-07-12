import Post from "./Post";

import styles from "./MyPost.module.css";

const PostElements = ({ messageList }) =>
  messageList.map((post, index) => (
    <Post key={index} message={post.message} likes={post.likes} />
  ));

const MyPost = ({ messageList }) => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <button>Add Post</button>
    <PostElements messageList={messageList} />
  </div>
);

export default MyPost;
