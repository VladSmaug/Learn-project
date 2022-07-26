const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
  NEW_MESSAGE_TEXT: "",
};

const dialogsReducer = (state = initialState, action) => {
  {
    switch (action.type) {
      case SEND_MESSAGE:
        const body = state.NEW_MESSAGE_TEXT;
        state.NEW_MESSAGE_TEXT = "";
        state.CONVERSATION_MESSAGES.push({ text: body, id: 7 });

        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        state.NEW_MESSAGE_TEXT = action.body;
        break;
    }
  }
  return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
});

export default dialogsReducer;
