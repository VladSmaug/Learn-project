import React from "react";
import styles from "./Profile.module.css";
import MyPost from "./My posts/MyPost";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/puppy-labrador-retriever_87557-10551.jpg?w=2000"
          alt=""
          className={styles.avatar}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, ad.
        </p>
        <ul className={styles.item}>
          <li className={styles.name}>My posts</li>
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
