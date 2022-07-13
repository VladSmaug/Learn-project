import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = ({ sidebar }) => {
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
      <div className="friends-item">
        {sidebar.map((item, index) => (
          <React.Fragment key={index}>
            {item.avatar}
            {item.text}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
export default Nav;
