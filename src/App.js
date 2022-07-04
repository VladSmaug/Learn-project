import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Nav from "./components/Nav";

import Profile from "./components/Profile";

import Dialogs from "./components/Dialogs";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
