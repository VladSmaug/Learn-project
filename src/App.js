import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

import "./App.css";

import { USERS_LIST, POST_DATA } from "./utils/static/constants";

function App() {
  return (
    <div className="app-wrapper">
      <Header nameLogoDefault="1" nameLogoSample="2" />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<Profile messageList={POST_DATA} />} />
          <Route path="dialogs" element={<Dialogs list={USERS_LIST} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
