import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Picture"
      />
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Picture"
      />
    </header>
  );
};
export default Header;
