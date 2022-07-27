import { createRef } from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";

import MyPost from ".";

const MyPostContainer = (props) => {
  const areaRef = createRef();
  const onPostHandler = () => {
    const text = areaRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPostHandler = () => {
    props.dispatch(addPostActionCreator());
    areaRef.current.value = "";
  };
  return (
    <MyPost
      areaRef={areaRef}
      onPostHandler={onPostHandler}
      addPostHandler={addPostHandler}
      messageList={props.messageList}
    />
  );
};

export default MyPostContainer;
