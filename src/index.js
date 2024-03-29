import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// import store from "./redux/state"; for better understanding of what happens with state;
import store from "./redux/redux-store";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const _rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};
_rerenderEntireTree(store.getState);

store.subscribe(() => {
  let state = store.getState();
  _rerenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
