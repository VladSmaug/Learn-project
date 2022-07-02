import React from "react";
import s from "./Nav.module.css";

const Nav = (props) => {
  const { guide } = props;
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
      {guide}
    </nav>
  );
};
export default Nav;
