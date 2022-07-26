const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
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
