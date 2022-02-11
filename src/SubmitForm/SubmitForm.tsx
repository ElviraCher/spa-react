import React from "react";
import "./SubmitForm.css";

export default function SubmitForm() {
  return (
    <div className="accept__container">
      <p className="accept__text">Форма успешно отправлена</p>
      <p className="accept__text accept__text--extra">
        Данные выведены в консоли в JSON формате
      </p>
    </div>
  );
}
