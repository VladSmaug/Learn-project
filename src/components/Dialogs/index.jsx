import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

const dialogsData = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Vlad" },
];

const messagesData = [
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
        <DialogItem
          name={dialogsData.map((dia) => {
            return <li>{dia.name}</li>;
          })}
        />
      </div>
      <div className={styles.messages}>
        <MessageItem
          text={messagesData.map((message) => {
            return <li>{message.text}</li>;
          })}
        />
      </div>
    </div>
  );
};
export default Dialogs;
