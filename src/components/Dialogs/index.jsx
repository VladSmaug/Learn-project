import React, { createRef } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";
// import TableReg from "../MAP";

const dialogsData = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Somebody else" },
  { id: 3, name: "Somebody else" },
  { id: 4, name: "Somebody else" },
  { id: 5, name: "Somebody else" },
  { id: 6, name: "Somebody else" },
];

const messagesData = [
  { text: "lorem", id: 1 },
  { text: "lorem", id: 2 },
  { text: "lorem", id: 3 },
  { text: "lorem", id: 4 },
  { text: "lorem", id: 5 },
  { text: "lorem", id: 6 },
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
          name={dialogsData.map((dia, index) => (
            <li key={index}>{dia.name}</li>
          ))}
        />
        <MessageItem
          text={messagesData.map((message, index) => (
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
