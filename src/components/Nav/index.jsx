import React from "react";

import styles from "./Nav.module.css";

const Nav = (props) => {
  const { guide } = props;
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Messages</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      {guide}
    </nav>
  );
};
export default Nav;
