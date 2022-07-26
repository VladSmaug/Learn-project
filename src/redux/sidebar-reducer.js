const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
