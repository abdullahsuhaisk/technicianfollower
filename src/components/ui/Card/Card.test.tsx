import { BiQrScan } from "react-icons/bi";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./Card";

describe("Card component is working properly", () => {

  test("Card title is exist", () => {
    render(<Card title={"My Card"} Icon={BiQrScan} />);
    const cardTitle = screen.getByText("My Card");
    expect(cardTitle).toHaveTextContent("My Card");
  });

  test("Card icon is exist", () => {
    render(<Card title={"My Card"} Icon={BiQrScan} />);
    const cardIcon = screen.getByTestId("icon")
    // screen.debug();
    expect(cardIcon).toBeInTheDocument()
  });

});
