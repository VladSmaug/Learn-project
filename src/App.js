import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

import "./App.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header nameLogoDefault="1" nameLogoSample="2" />
      <Nav sidebar={props.appState.NAV_FRIENDS.USERS_DATA} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
            element={
              <Profile messageList={props.appState.MESSAGES.POST_DATA} />
            }
          />
          <Route
            path="dialogs"
            element={<Dialogs list={props.appState.DIALOGS.USERS_LIST} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
