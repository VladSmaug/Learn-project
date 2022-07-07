import Post from "./Post";

import styles from "./MyPost.module.css";

const postData = [
  { message: "Hi how are you", likes: 10, id: 1 },
  { message: "Hello how are you?", likes: 20, id: 2 },
];

const PostElements = postData.map((post, index) => (
  <Post key={index} message={post.message} likes={post.likes} />
));

const MyPost = () => (
  <div className={styles.my_post_wrapper}>
    <h3>My posts</h3>
    <textarea></textarea>
    <button>Add Post</button>
    {PostElements}
  </div>
);

export default MyPost;
