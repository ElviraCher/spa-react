import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./UserProfile.css";

interface UserProfileProps {
  data: [{}];
}

export default function UserProfile(props: UserProfileProps) {
  const { data } = props;
  const { id } = useParams();
  const user = data[id];
  const [edit, setEdit] = useState(false);

  const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    const onInputChange = (e: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setValue(e.target.value);
    };

    const onInputBlur = () => {
      setIsDirty(true);
      if (value) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }

      if (value.length < 3) {
        setMinLengthError(true);
      } else {
        setMinLengthError(false);
      }
    };

    useEffect(() => {
      if (isEmpty || minLengthError) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    });

    return {
      value,
      isDirty,
      onInputChange,
      onInputBlur,
      isEmpty,
      minLengthError,
      inputValid,
    };
  };

  const name = useInput(`${user.name}`);
  const userName = useInput(`${user.username}`);
  const email = useInput(`${user.email}`);
  const street = useInput(`${user.address.street}`);
  const city = useInput(`${user.address.city}`);
  const zipCode = useInput(`${user.address.zipcode}`);
  const phone = useInput(`${user.phone}`);
  const website = useInput(`${user.website}`);
  const comment = useInput("");

  const formFields = [
    name,
    userName,
    email,
    street,
    city,
    zipCode,
    phone,
    website,
    comment,
  ];
  const formValid =
    name.inputValid &&
    userName.inputValid &&
    email.inputValid &&
    street.inputValid &&
    city.inputValid &&
    zipCode.inputValid &&
    phone.inputValid &&
    website.inputValid;

  const editButtonHandler = () => {
    setEdit(true);
  };
  const names = [
    "name",
    "userName",
    "email",
    "street",
    "city",
    "zipCode",
    "phone",
    "website",
    "comment",
  ];
  const handleSubmit = (e: React.FormEvent) => {
    if (formValid && edit) {
      const answer = [
        name,
        userName,
        email,
        street,
        city,
        zipCode,
        phone,
        website,
        comment,
      ];

      const result = [];
      for (let i = 0; i < names.length; i += 1) {
        const key = names[i];
        const obj: { [index: string]: string } = {};
        obj[key] = answer[i].value;
        result.push(obj);
      }

      console.log(JSON.stringify(result));
    }
    e.preventDefault();
  };

  const inputs = formFields.map((field, index) => (
    <div className="input">
      <label className="input__label" htmlFor={names[index]}>
        {names[index]}{" "}
        {field.isDirty && field.isEmpty && (
          <p className="input__label--error">Поле не может быть пустым</p>
        )}{" "}
        {field.isDirty && field.minLengthError && (
          <p className="input__label--error">
            Поле должно быть более 3-х символов
          </p>
        )}
      </label>

      {field === comment && (
        <textarea
          className={`input__field input__field--${
            edit ? "active" : "inactive"
          } input__field--textarea`}
          onChange={(e) => field.onInputChange(e)}
          id={names[index]}
          readOnly={!edit}
          value={field.value}
        >
          {field.value}
        </textarea>
      )}

      {field !== comment && (
        <input
          className={`input__field input__field--${
            edit ? "active" : "inactive"
          } input__field--${field.inputValid ? "valid" : "invalid"}`}
          id={names[index]}
          onChange={(e) => field.onInputChange(e)}
          onBlur={(e) => field.onInputBlur(e)}
          type={names[index]}
          required
          readOnly={!edit}
          value={field.value}
        />
      )}
    </div>
  ));

  return (
    <div className="user__profile">
      <button
        className="profile__button profile__button--edit"
        onClick={editButtonHandler}
        type="submit"
      >
        Редактировать
      </button>
      <button
        className={`profile__button profile__button--submit profile__button--submit--${
          edit && formValid ? "active" : "inactive"
        }`}
        onClick={handleSubmit}
        type="submit"
      >
        Отправить
      </button>
      <form className="form" onSubmit={handleSubmit}>
        {inputs}
      </form>
    </div>
  );
}
