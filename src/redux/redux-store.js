import { createStore, combineReducers } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
  MESSAGES: profileReducer,
  DIALOGS: dialogsReducer,
  NAV_FRIENDS: sidebarReducer,
});

const store = createStore(reducers);

export default store;
