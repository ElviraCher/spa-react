import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App/App.tsx";
import "./Button/Button.css";
import "./App/App.css";
import "./FormInput/FormInput.css";
import "./Layout/Layout.css";
import "./Loading/Loading.css";
import "./Sidebar/Sidebar.css";
import "./SubmitForm/SubmitForm.css";
import "./UserCard/UserCard.css";
import "./UserProfile/UserProfile.css";
import "./UsersList/UserList.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
