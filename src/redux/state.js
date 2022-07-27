import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// let store = {
//   _state: {
//     DIALOGS: {
//       USERS_LIST: [
//         {
//           username: "Vlad",
//           surname: "H",
//           age: "25",
//         },
//         {
//           username: "Big Smoke",
//           surname: "Dog",
//           age: "31",
//         },
//         {
//           username: "C",
//           surname: "J",
//           age: "28",
//         },
//         {
//           username: "Sweet",
//           surname: "308",
//           age: "30",
//         },
//       ],
//       CONVERSATIONS: [
//         { id: 1, name: "Vlad" },
//         { id: 2, name: "Somebody else" },
//         { id: 3, name: "Somebody else" },
//         { id: 4, name: "Somebody else" },
//         { id: 5, name: "Somebody else" },
//         { id: 6, name: "Somebody else" },
//       ],
//       CONVERSATION_MESSAGES: [
//         { text: "lorem", id: 1 },
//         { text: "lorem", id: 2 },
//         { text: "lorem", id: 3 },
//         { text: "lorem", id: 4 },
//         { text: "lorem", id: 5 },
//         { text: "lorem", id: 6 },
//       ],
//       NEW_MESSAGE_TEXT: "",
//     },
//     MESSAGES: {
//       POST_DATA: [
//         { message: "Hi how are you", likes: 10, id: 1 },
//         { message: "Hello how are you?", likes: 20, id: 2 },
//       ],
//       NEW_POST_TEXT: "asd",
//     },
//     NAV_FRIENDS: {
//       USERS_DATA: [
//         {
//           avatar: <img src="\images\ava1.png" alt="avatar" />,
//           text: "lorem",
//         },
//         {
//           avatar: (
//             <img
//               src="\images\man-avatar-vector-silhouettes-of-people-132032.png"
//               alt="avatar"
//             />
//           ),
//           text: "lorem",
//         },
//         {
//           avatar: (
//             <img
//               src="\images\pngtree-human-avatar-free-vector-png-image_4825373.png"
//               alt="avatar"
//             />
//           ),
//           text: "lorem",
//         },
//       ],
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.MESSAGES = profileReducer(this._state.MESSAGES, action);
//     this._state.DIALOGS = dialogsReducer(this._state.DIALOGS, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
