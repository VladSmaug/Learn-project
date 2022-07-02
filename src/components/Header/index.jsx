import React from "react";
import f from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={f.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Picture"
      />
      {props.nameLogoDefault}
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Picture"
      />
      {props.nameLogoSample}
    </header>
  );
};
export default Header;
