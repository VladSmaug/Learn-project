import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

let dialogsData = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Vlad" },
];

let messagesData = [
  { text: "lorem", id: 1 },
  { text: "lorem", id: 2 },
];

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
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={styles.messages}>
        <MessageItem text={messagesData[0].text} id={messagesData[0].id} />
        <MessageItem text={messagesData[1].text} id={messagesData[1].id} />
      </div>
    </div>
  );
};
export default Dialogs;
