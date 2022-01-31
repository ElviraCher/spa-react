import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Example } from "./Example.tsx";

describe("Example", () => {
  it("returns React component", () => {
    const text = "Hello!";
    render(<Example text={text} />);
    const element = screen.getByTestId("example");
    expect(element).toBeInTheDocument();
  });
});
