import { render, screen, fireEvent } from "@testing-library/react";
import { Provider as JobProvider } from "../../hooks/JobContext";

import { Header } from "./Header";

describe("Header is working properly", () => {
  test("Logout icon is exist when user loggedin", () => {
    const mockLogout = jest.fn();
    render(
      <JobProvider>
        <Header userLogged={true} onLogout={mockLogout} />
      </JobProvider>
    );
    const logoutDiv = screen.queryByTestId("logout");
    expect(logoutDiv).toBeInTheDocument();
  });

  test("Logout icon isn't exist when user logged out", () => {
    const mockLogout = jest.fn();
    render(
      <JobProvider>
        <Header userLogged={false} onLogout={mockLogout} />
      </JobProvider>
    );
    const logoutDiv = screen.queryByTestId("logout");
    expect(logoutDiv).not.toBeInTheDocument();
  });

  test("Logout icon handleLogout calls function", () => {
    const mockLogout = jest.fn();
    render(
      <JobProvider>
        <Header userLogged={true} onLogout={mockLogout} />
      </JobProvider>
    );
    const logoutDiv = screen.queryByTestId("logout")!;
    fireEvent.click(logoutDiv);
    expect(mockLogout).toHaveBeenCalled();
  });
});
