const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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

export default profileReducer;
