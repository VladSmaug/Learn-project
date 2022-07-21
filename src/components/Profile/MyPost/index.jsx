import { createRef } from "react";

import Post from "./Post";
import { updateNewPostTextActionCreator } from "./../../../redux/state";
import { addPostActionCreator } from "./../../../redux/state";

import styles from "./MyPost.module.css";

const MyPost = (props) => {
  const areaRef = createRef();

  const onPostHandler = () => {
    const text = areaRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPostHandler = () => {
    props.dispatch(addPostActionCreator());
    areaRef.current.value = "";
  };

  const PostElements = ({ messageList }) =>
    messageList.map((post, index) => (
      <Post key={index} message={post.message} likes={post.likes} />
    ));

  return (
    <div className={styles.my_post_wrapper}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostHandler}
          ref={areaRef}
          placeholder="add your post here"
        />
      </div>
      <button onClick={addPostHandler}>Add Post</button>
      <PostElements messageList={props.messageList} />
    </div>
  );
};

export default MyPost;
