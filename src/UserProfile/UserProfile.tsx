import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface UserProfileProps {
  data: [{}];
}

export default function UserProfile(props: UserProfileProps) {
  const { data } = props;
  const { id } = useParams();
  const user = data[id];

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [userName, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.address.street);
  const [city, setCity] = useState(user.address.city);
  const [zipCode, setZipCode] = useState(user.address.zipcode);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [comment, setComment] = useState("");

  const editButtonHandler = () => {
    setEdit(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(
      name,
      userName,
      email,
      street,
      city,
      zipCode,
      phone,
      website,
      comment
    );
    e.preventDefault();
  };

  return (
    <div className="user__profile">
      <button
        className="profile__button profile__button--edit"
        onClick={editButtonHandler}
      >
        Редактировать
      </button>
      <button
        className={`profile__button profile__button--submit profile__button--submit--${
          edit ? "active" : "inactive"
        }`}
        onClick={handleSubmit}
      >
        Отправить
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__text">Имя</p>
        <input
          readOnly={!edit}
          name="name"
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="form__text">User name</p>
        <input
          readOnly={!edit}
          name="userName"
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="form__text">E-mail</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="form__text">Street</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <p className="form__text">City</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <p className="form__text">Zip code</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <p className="form__text">Phone</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className="form__text">Website</p>
        <input
          readOnly={!edit}
          className={`form__input form__input--${edit ? "active" : "inactive"}`}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <p className="form__text">Comment</p>
        <textarea
          readOnly={!edit}
          className={`form__input form__input--${
            edit ? "active" : "inactive"
          } form__input--textarea`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  );
}
