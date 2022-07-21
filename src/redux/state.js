let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
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
    CONVERSATIONS: [
      { id: 1, name: "Vlad" },
      { id: 2, name: "Somebody else" },
      { id: 3, name: "Somebody else" },
      { id: 4, name: "Somebody else" },
      { id: 5, name: "Somebody else" },
      { id: 6, name: "Somebody else" },
    ],
    CONVERSATION_MESSAGES: [
      { text: "lorem", id: 1 },
      { text: "lorem", id: 2 },
      { text: "lorem", id: 3 },
      { text: "lorem", id: 4 },
      { text: "lorem", id: 5 },
      { text: "lorem", id: 6 },
    ],
    MESSAGES: {
      POST_DATA: [
        { message: "Hi how are you", likes: 10, id: 1 },
        { message: "Hello how are you?", likes: 20, id: 2 },
      ],
      NEW_POST_TEXT: "asd",
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        message: this._state.MESSAGES.NEW_POST_TEXT,
        likes: 0,
        id: 1,
      };
      this._state.MESSAGES.POST_DATA.push(newPost);
      this._state.MESSAGES.NEW_POST_TEXT = "";
      this._callSubscriber(this._state);
    } else {
      this._state.MESSAGES.NEW_POST_TEXT = action.newPostText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});
export default store;
window.store = store;
