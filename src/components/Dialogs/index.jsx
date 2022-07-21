import React, { createRef } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";
import store from "../../redux/state";
// import TableReg from "../MAP";

const dialogsData = [];

const messagesData = [];

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

const Dialogs = ({ list }) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem
          name={store._state.CONVERSATIONS.map((dia, index) => (
            <li key={index}>{dia.name}</li>
          ))}
        />
        <MessageItem
          text={store._state.CONVERSATION_MESSAGES.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))}
        />
      </div>

      {/*  <TableReg usersList={list} />
      <textarea ref={areaRef} />
      <button onClick={onClickHandler}>Submit</button>{" "}
      <input type="text" onChange={onChangeHandler} /> */}
    </div>
  );
};

export default Dialogs;
