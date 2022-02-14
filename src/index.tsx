import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App/App.tsx";
import "./Button/Button.scss";
import "./App/App.scss";
import "./FormInput/FormInput.scss";
import "./Layout/Layout.scss";
import "./Loading/Loading.scss";
import "./Sidebar/Sidebar.scss";
import "./SubmitForm/SubmitForm.scss";
import "./UserCard/UserCard.scss";
import "./UserProfile/UserProfile.scss";
import "./UsersList/UsersList.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
