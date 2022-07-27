const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  POST_DATA: [
    { message: "Hi how are you", likes: 10, id: 1 },
    { message: "Hello how are you?", likes: 20, id: 2 },
  ],
  NEW_POST_TEXT: "asd",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        message: state.NEW_POST_TEXT,
        likes: 0,
        id: 1,
      };
      state.POST_DATA.push(newPost);
      state.NEW_POST_TEXT = "";
      break;
    case UPDATE_NEW_POST_TEXT:
      {
        state.NEW_POST_TEXT = action.newPostText;
      }
      break;
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});

export default profileReducer;
