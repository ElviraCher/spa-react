import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./UserProfile.css";
import FormInput from "../FormInput/FormInput.tsx";
import SubmitForm from "../SubmitForm/SubmitForm.tsx";

interface UserProfileProps {
  data: [{}];
}

export default function UserProfile(props: UserProfileProps) {
  const { data } = props;
  const { id } = useParams();
  const user = data[id];

  const formFields = [
    user.name,
    user.username,
    user.email,
    user.address.street,
    user.address.city,
    user.address.zipcode,
    user.phone,
    user.website,
  ];

  const [edit, setEdit] = useState(false);
  const [valid, setValid] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    name: formFields[0],
    username: formFields[1],
    email: formFields[2],
    street: formFields[3],
    city: formFields[4],
    zipcode: formFields[5],
    phone: formFields[6],
    website: formFields[7],
    comment: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "name",
      label: "Name",
      errorMassage: "Укажите имя",
      defaultValue: user.name,
      pattern: "john",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "username",
      label: "Username",
      errorMassage: "Укажите username",
      defaultValue: user.username,
      required: true,
    },
    {
      id: 3,
      type: "email",
      name: "email",
      label: "Email",
      defaultValue: user.email,
      errorMassage: "Поле должно содержать действующий e-mail",
      required: true,
    },
    {
      id: 4,
      type: "text",
      name: "street",
      label: "Street",
      defaultValue: user.address.street,
      errorMassage: "Поле не может быть пустым",
      required: true,
    },
    {
      id: 5,
      type: "text",
      name: "city",
      label: "City",
      defaultValue: user.address.city,
      errorMassage: "Поле не может быть пустым",
      required: true,
    },
    {
      id: 6,
      type: "text",
      name: "zipcode",
      label: "Zipcode",
      defaultValue: user.address.zipcode,
      errorMassage: "Поле не может быть пустым",
      required: true,
    },
    {
      id: 7,
      type: "text",
      name: "phone",
      label: "Phone",
      defaultValue: user.phone,
      errorMassage: "Поле не может быть пустым",
      required: true,
    },
    {
      id: 8,
      type: "text",
      name: "website",
      label: "Website",
      defaultValue: user.website,
      errorMassage: "Поле не может быть пустым",
      required: true,
    },
    {
      id: 9,
      type: "text",
      name: "comment",
      label: "Comment",
      required: false,
    },
  ];

  const onChange = (e) => {
    if (!e.target.value) {
      setValid(false);
    } else {
      setValid(true);
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleEditButton = () => {
    setEdit(true);
  };

  const handleSubmitButton = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (valid) {
      console.log(JSON.stringify(values));
      setSubmit(true);
    }
  };
  return (
    <>
      {submit ? (
        <SubmitForm />
      ) : (
        <div className="user__profile">
          <button
            className="profile__button profile__button--edit"
            type="submit"
            onClick={handleEditButton}
          >
            Редактировать
          </button>
          <button
            className={`profile__button profile__button--submit profile__button--submit--${
              edit && valid ? "active" : "inactive"
            }`}
            type="submit"
            disabled={!edit}
            onClick={(e) => handleSubmitButton(e)}
          >
            Отправить
          </button>
          <form onSubmit={handleSubmit} className="form">
            {inputs.map((input) => (
              <FormInput
                readOnly={!edit}
                key={input.id}
                value={values[input.name]}
                onChange={onChange}
                edit={edit}
                {...input}
              />
            ))}
          </form>
        </div>
      )}
    </>
  );
}
