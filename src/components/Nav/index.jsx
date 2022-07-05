import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = (props) => {
  const { guide } = props;
  return (
    <nav className={styles.nav}>
      <ul className={styles.item}>
        <NavLink to="/profile" className={styles.activeLink}>
          Profile
        </NavLink>
        <NavLink to="/dialogs" className={styles.activeLink}>
          Dialogs
        </NavLink>
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
