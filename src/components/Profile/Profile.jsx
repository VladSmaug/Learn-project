import React from "react";
import d from "./Profile.module.css";
import MyPost from "./My posts/MyPost";

const Profile = () => {
  return (
    <div>
      <div className={d.content}>
        <img
          src="https://img.freepik.com/free-photo/puppy-labrador-retriever_87557-10551.jpg?w=2000"
          alt=""
          className={d.avatar}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, ad.
        </p>
        <ul className={d.item}>
          <li className={d.name}>My posts</li>
          <li>My description</li>
          <li>My emotions</li>
          <li>My</li>
        </ul>
        <MyPost />
      </div>
    </div>
  );
};
export default Profile;
