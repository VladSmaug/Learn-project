import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="dialogs" element={<Dialogs />} />
      </Routes>
    </div>
  );
}

export default App;
