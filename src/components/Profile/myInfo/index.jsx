import React from "react";

import styles from "./MyInfo.module.css";

const MyInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/puppy-labrador-retriever_87557-10551.jpg?w=2000"
          alt="Avatar"
          className={styles.avatar}
        />
        <div>avatar + description</div>
      </div>
    </div>
  );
};
export default MyInfo;
