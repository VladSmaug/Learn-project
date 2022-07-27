import { createRef } from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";

import MyPost from ".";

const MyPostContainer = (props) => {
  console.log({});
  const areaRef = createRef();
  const onPostHandler = () => {
    const text = areaRef.current.value;
    props.store.dispatch(updateNewPostTextActionCreator());
  };

  const addPostHandler = () => {
    props.store.dispatch(addPostActionCreator());
    areaRef.current.value = "";
  };
  return (
    <MyPost
      onPostHandler={onPostHandler}
      addPostHandler={addPostHandler}
      messageList={props.messageList}
    />
  );
};

export default MyPostContainer;
