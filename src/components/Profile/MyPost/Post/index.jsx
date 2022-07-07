import React from "react";

import styles from "./Postnumber.module.css";

const Post = (props) => {
  const { message, likes } = props;
  return (
    <div className="post-wrapper">
      <img
        className={styles.image}
        src="https://img1.freepng.ru/20180403/qxw/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac354968f08a9.0046040315227506145859.jpg"
        alt="post-icon"
      />
      <div>Users info {likes}</div>
      <div>Description {message}</div>
    </div>
  );
};
export default Post;
