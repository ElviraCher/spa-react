import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UsersList from "../UsersList/UsersList.tsx";
import UserProfile from "../UserProfile/UserProfile.tsx";
import Layout from "../Layout/Layout.tsx";
import Loading from "../Loading/Loading.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import URL from "../URL/URL.tsx";

export default function App() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [loading, setLoading] = useState(undefined);

  const [headerText, setHeaderText] = useState("Список пользователей");
  const [sortWay, setSortWay] = useState("none");

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((users) => {
          setUsersInfo(users);
          setLoading(true);
        });
    }, 500);
  }, []);

  const sortByNameHandler = () => {
    setSortWay("name");
  };

  const sortByCityHandler = () => {
    setSortWay("city");
  };

  return (
    <div className="container">
      {!loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar
            sortByNameHandler={sortByNameHandler}
            sortByCityHandler={sortByCityHandler}
          />
          <Routes>
            <Route path="/*" element={<Layout header={headerText} />}>
              <Route
                index
                element={<UsersList data={usersInfo} sortWay={sortWay} />}
              />
              <Route path=":id" element={<UserProfile data={usersInfo} />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}
