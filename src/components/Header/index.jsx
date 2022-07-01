import React from "react";
import f from "./Header.module.css";

const Header = (objectProps) => {
  return (
    <header className={f.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Picture"
      />
      {objectProps.nameLogoDefault}
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Picture"
      />
      {objectProps.nameLogoSample}
    </header>
  );
};
export default Header;
