import React from "react";

import styles from "./index.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + " " + styles.active}>Vlad</div>
        <div className={styles.dialog}>FFFF</div>
        <div className={styles.dialog}>Username1</div>
        <div className={styles.dialog}>Username2</div>
        <div className={styles.dialog}>Username3</div>
        <div className={styles.dialog}>Username4</div>
        <div className={styles.dialog}>Username5</div>
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
