import { rerenderEntireTree } from "../render";

export const state = {
  DIALOGS: {
    USERS_LIST: [
      {
        username: "Vlad",
        surname: "H",
        age: "25",
      },
      {
        username: "Big Smoke",
        surname: "Dog",
        age: "31",
      },
      {
        username: "C",
        surname: "J",
        age: "28",
      },
      {
        username: "Sweet",
        surname: "308",
        age: "30",
      },
    ],
  },
  MESSAGES: {
    POST_DATA: [
      { message: "Hi how are you", likes: 10, id: 1 },
      { message: "Hello how are you?", likes: 20, id: 2 },
    ],
  },
  NAV_FRIENDS: {
    USERS_DATA: [
      {
        avatar: <img src="\images\ava1.png" alt="avatar" />,
        text: "lorem",
      },
      {
        avatar: (
          <img
            src="\images\man-avatar-vector-silhouettes-of-people-132032.png"
            alt="avatar"
          />
        ),
        text: "lorem",
      },
      {
        avatar: (
          <img
            src="\images\pngtree-human-avatar-free-vector-png-image_4825373.png"
            alt="avatar"
          />
        ),
        text: "lorem",
      },
    ],
  },
};

export const addPost = (postMessage) => {
  const newPost = {
    message: postMessage,
    likes: 0,
    id: 1,
  };
  state.MESSAGES.POST_DATA.push(newPost);
  rerenderEntireTree(state);
};

export default state;
