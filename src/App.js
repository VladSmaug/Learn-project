import "./App.css";
import Header from "./components/Header/index";
import Nav from "./components/Nav";
import Profile from "./components/Profile/index";

function App() {
  return (
    <div className="app-wrapper">
      <Header nameLogoDefault="Logo1" nameLogoSample="Logo2" />
      <Nav guide="This is nav" />
      <Profile />
      <div></div>
    </div>
  );
}

export default App;
