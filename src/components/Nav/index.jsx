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
      <div className={styles.friends}>
        <div>Friends</div>
        {sidebar.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.friends_item}>
              <a href="#">{item.avatar}</a>
              <a href="#">{item.text}</a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
export default Nav;
