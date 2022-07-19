import React from "react";

import styles from "./MyInfo.module.css";

const MyInfo = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img
          src="https://img.freepik.com/free-photo/puppy-labrador-retriever_87557-10551.jpg?w=2000"
          alt="Avatar-sdsd"
          className={styles.avatar}
        />
        <div className={styles.text}>
          <div>username</div>
          <div>userstatus</div>
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
