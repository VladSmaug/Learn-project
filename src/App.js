import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

import "./App.css";

const App = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav sidebar={state.NAV_FRIENDS.USERS_DATA} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
            element={
              <Profile
                state={state}
                messageList={state.MESSAGES.POST_DATA}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="dialogs"
            element={
              <Dialogs
                conversations={state.DIALOGS.CONVERSATIONS}
                conversationMessages={state.DIALOGS.CONVERSATION_MESSAGES}
                list={state.DIALOGS.USERS_LIST}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
