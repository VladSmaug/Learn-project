import React from "react";

import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = (props) => {
  const { guide } = props;
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/profile">Profile</Link>
        <Link to="/dialogs">Dialogs</Link>
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
