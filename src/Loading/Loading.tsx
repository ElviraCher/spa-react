import React from "react";

export default function Loading() {
  return (
    <>
      <div className="spinner">
        <span className="spinner__sign">Идёт загрузка...</span>
        <span className="spinner__img"> </span>
      </div>
    </>
  );
}
