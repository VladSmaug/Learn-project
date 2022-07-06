import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

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
const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Vlad" id="1" />
        <DialogItem name="vvvv" id="2" />
        <DialogItem name="qqqq" id="3" />
        <DialogItem name="vvvv" id="4" />
        <DialogItem name="gggg" id="5" />
        <DialogItem name="eeee" id="6" />
      </div>
      <div className={styles.messages}>
        <MessageItem text="lorem" />
        <MessageItem text="lorem" />
        <MessageItem text="lorem" />
        <MessageItem text="lorem" />
        <MessageItem text="lorem" />
        <MessageItem text="lorem" />
      </div>
    </div>
  );
};
export default Dialogs;
