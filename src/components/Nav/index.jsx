import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="#">Author</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Massages</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
