import React from "react";

interface ButtonProps {
  text: string;
  handler: () => {};
}

export default function Button(props: ButtonProps) {
  const { text, handler } = props;
  return (
    <div>
      <button className="button" onClick={handler} type="submit">
        {text}
      </button>
    </div>
  );
}
