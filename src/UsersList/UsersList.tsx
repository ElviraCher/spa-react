import React from "react";
import { Link } from "react-router-dom";

import UserCard from "../UserCard/UserCard.tsx";
import sortBy from "../helpers/SortBy.tsx";

import { UserCardProps } from "../UserProfile/UserProfile.tsx";
import "./UserList.css";

export default function UsersList(props: UserCardProps) {
  const { data } = props;

  sortBy(props);

  const readyUserList = data.map(
    (user: any, index: number): UserCardProps => (
      <div key={user.id} className="user">
        <UserCard
          className="user__cards"
          userName={data[index].name}
          city={data[index].address.city}
          companyName={data[index].company.name}
        />
        <Link className="user__cards-link" to={`/${user.id - 1}`}>
          Подробнее
        </Link>
      </div>
    )
  );

  return (
    <div className="list-container">
      <div>{readyUserList}</div>
      <p className="counter">Найдено {data.length} пользователей</p>
    </div>
  );
}
