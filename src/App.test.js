import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("Test for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    const result = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(result.container.querySelector("#header")).not.toBeNull();
    expect(screen.getByText("Characters Content")).toBeInTheDocument();
  });
});
