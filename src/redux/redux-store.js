import { createStore, combineReducers } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
  MESSAGES: profileReducer,
  DIALOGS: dialogsReducer,
});

const store = createStore(reducers);

export default store;
