import React from "react";
import p from "./Postnumber.module.css";

const Post = (props) => {
  return (
    <div>
      <img
        className={p.image}
        src="https://img1.freepng.ru/20180403/qxw/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac354968f08a9.0046040315227506145859.jpg"
        alt=""
      />
      {props.message}
      {props.likes}
      <div>Users info</div>
      <div>Description</div>
      <div>Commiting practice</div>
    </div>
  );
};
export default Post;
