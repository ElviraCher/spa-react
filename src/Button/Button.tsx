import React from "react";

import "./Button.css";

interface ButtonProps {
  text: string;
  handler: () => {};
}

export default function Button(props: ButtonProps) {
  const { text, handler } = props;
  return (
    <div className="button__container">
      <button className="button" onClick={handler}>
        {text}
      </button>
    </div>
  );
}


