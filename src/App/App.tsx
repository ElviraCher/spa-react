import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UsersList from "../UsersList/UsersList.tsx";
import UserProfile from "../UserProfile/UserProfile.tsx";
import Button from "../Button/Button.tsx";
import Layout from "../Layout/Layout.tsx";
import URL from "../URL/URL.tsx";

import "./App.css";

export default function App() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [headerText, setHeaderText] = useState("Список пользователей");
  const [sortWay, setSortWay] = useState("none");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => setUsersInfo(users));
  }, []);

  const sortByNameHandler = () => {
    setSortWay("name");
  };

  const sortByCityHandler = () => {
    setSortWay("city");
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar__nav">
          <p className="sidebar__header">Сортировка</p>
          <Button handler={sortByCityHandler} text="по городу" />
          <Button handler={sortByNameHandler} text="по имени" />
        </div>
      </div>

      <Routes>
        <Route path="/*" element={<Layout header={headerText} />}>
          <Route
            index
            element={<UsersList data={usersInfo} sortWay={sortWay} />}
          />
          <Route path=":id" element={<UserProfile data={usersInfo} />} />
        </Route>
      </Routes>
    </div>
  );
}
