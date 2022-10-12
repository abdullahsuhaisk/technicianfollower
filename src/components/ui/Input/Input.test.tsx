import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component is working properly", () => {
  const placeholderText = "Write something";
  const mockHandleChange = jest.fn();

  test("should render input component", () => {
    render(<Input onChange={mockHandleChange} placeholder={placeholderText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<Input onChange={mockHandleChange} placeholder={placeholderText}/>);
    const inputElement = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });
});
