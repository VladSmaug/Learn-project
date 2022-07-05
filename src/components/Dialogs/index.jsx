import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={classNames(styles.dialog, styles.active)}>
          <NavLink to="dialogs/1">Vlad</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="dialogs/2">FFF</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to={"dialogs/3"}>Username1</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to={"dialogs/3"}>Username2</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to={"dialogs/4"}>Username3</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to={"dialogs/5"}>Username4</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to={"dialogs/6"}>Username5</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.message}>Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  );
};
export default Dialogs;
