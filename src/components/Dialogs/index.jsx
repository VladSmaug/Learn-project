import React, { createRef } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";
import store from "../../redux/state";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./../../redux/state";
// import TableReg from "../MAP";

const DialogItem = (props) => {
  const { name, id } = props;
  return (
    <div className={classNames(styles.dialog, styles.active)}>
      <NavLink to={"dialogs/" + id}>{name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  const { text } = props;
  return <div className={styles.message}>{text}</div>;
};

// const areaRef = createRef();

// const onClickHandler = () => {
//   const areaValue = areaRef.current?.value;
//   alert(areaValue);
// };

// const onChangeHandler = (event) => {
//   console.log(event.target.value);
// };

// Reference example for the next time

const onSendMessageClick = () => {
  store.dispatch(sendMessageCreator());
};
const onNewMessageChange = (e) => {
  const body = e.target.value;
  store.dispatch(updateNewMessageBodyCreator(body));
};

// const Dialogs = ({list}) - for table
const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem
          name={store._state.DIALOGS.CONVERSATIONS.map((dialogs, index) => (
            <li className={styles.link} key={index}>
              <img
                className={styles.image}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"
                alt="users_logo"
              />
              {dialogs.name}
            </li>
          ))}
        />
        <MessageItem
          text={store._state.DIALOGS.CONVERSATION_MESSAGES.map(
            (message, index) => (
              <li className={styles.texts} key={index}>
                {message.text}
              </li>
            )
          )}
        />
        <div className={styles.workspace}>
          <textarea
            value={store._state.NEW_MESSAGE_TEXT}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
      // Reference example for the next time
      {/*  <TableReg usersList={list} />
      <textarea ref={areaRef} />
      <button onClick={onClickHandler}>Submit</button>{" "}
      <input type="text" onChange={onChangeHandler} /> */}
    </div>
  );
};

export default Dialogs;
