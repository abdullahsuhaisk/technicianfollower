import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button is working properly", () => {
  test("Test Button title is same with props", () => {
    render(<Button title={"My Button"} handleClick={() => {}} />);
    const uiButton = screen.getByRole("button");
    expect(uiButton).toHaveTextContent("My Button");
    expect(uiButton).not.toBeNull();
  });

  test("Test Button onClick calls function", () => {
    const mockHandleClick = jest.fn();
    render(<Button handleClick={mockHandleClick} title={"My Button"} />);
    const uiButton = screen.getByRole("button");
    fireEvent.click(uiButton);
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test("Test Button color is primary or secondary", () => {
    render(<Button title={"My Button"} handleClick={() => {}} primary />);
    const uiButton = screen.getByRole("button");
    expect(uiButton).toHaveClass("btn-primary");
  });

  test("Test Button color is red", () => {
    render(<Button title={"My Button"} handleClick={() => {}} red />);
    const uiButton = screen.getByRole("button");
    expect(uiButton).toHaveClass("btn btn-red");
  });

  test("Test Button if has not ayn color props ", () => {
    render(<Button title={"My Button"} handleClick={() => {}} />);
    const uiButton = screen.getByRole("button");
    expect(uiButton).toHaveClass("btn btn-secondary");
  });

  test("Test Button type is exist ", () => {
    render(<Button title={"My Button"} handleClick={() => {}} />);
    const uiButton = screen.getByRole("button");
    expect(uiButton).toBeInTheDocument();
  });

  test("Test Button type is submit ", () => {
    const onSubmit = jest.fn();
    render(
      <Button btnType={"submit"} handleClick={onSubmit} title={"My Button"} />
    );
    const uiButton = screen.getByRole("button");
    fireEvent.click(uiButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
