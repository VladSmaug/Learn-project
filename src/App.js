import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { addPost } from "./redux/state";

import "./App.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header nameLogoDefault="1" nameLogoSample="2" />
      <Nav sidebar={props.state.NAV_FRIENDS.USERS_DATA} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
            element={<Profile messageList={props.state.MESSAGES.POST_DATA} />}
          />
          <Route
            path="dialogs"
            element={<Dialogs list={props.state.DIALOGS.USERS_LIST} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
