import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header nameLogoDefault="Logo1" nameLogoSample="Logo2" />
      <Nav guide="This is nav" />
      <div className="app-wrapper-content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
