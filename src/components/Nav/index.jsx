import React from "react";

import s from "./Nav.module.css";

const Nav = (props) => {
  const { guide } = props;
  return (
    <nav className={s.nav}>
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
