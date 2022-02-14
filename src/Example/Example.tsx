import React from "react";
import "./Example.css";

interface ExampleProps {
  text: string;
}

export function Example(props: ExampleProps) {
  const { text } = props;
  return (
    <div>
      <p data-testid="example" className="example">
        {text}
      </p>
    </div>
  );
}
