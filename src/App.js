import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

import "./App.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav sidebar={props.state.NAV_FRIENDS.USERS_DATA} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
            element={
              <Profile
                messageList={props.state.MESSAGES.POST_DATA}
<<<<<<< HEAD
=======
                newPost={props.state.MESSAGES.NEW_POST}
>>>>>>> 8d3582e70b32c5eebf6b98804366e30b9156f876
                addPost={props.addPost}
              />
            }
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
