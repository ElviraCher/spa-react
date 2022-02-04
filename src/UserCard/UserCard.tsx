import React from "react";

import "./UserCard.css";

export interface UserCardProps {
  userName: string;
  city: string;
  companyName: string;
}

export default function UserCard(props: UserCardProps) {
  const { userName, city, companyName } = props;
  return (
    <div className="user__card">
      <div className="user__item">
        <p className="user__item--name">ФИО:</p>
        <p className="user__item--value"> {userName}</p>
      </div>
      <div className="user__item">
        <p className="user__item--name">город:</p>
        <p className="user__item--value"> {city}</p>
      </div>
      <div className="user__item">
        <p className="user__item--name">компания:</p>
        <p className="user__item--value"> {companyName}</p>
      </div>
    </div>
  );
}
