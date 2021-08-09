import React from "react";
import "@testing-library/jest-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

function NavLinkClickExcept(testId, content) {
  fireEvent.click(screen.getByTestId(testId));

  expect(
    screen.getByText(`List of ${content}`, { exact: false })
  ).not.toBeNull();
}

function AllNavLinksClickExcept() {
  NavLinkClickExcept("navigate-to-home", "Characters");
  NavLinkClickExcept("navigate-to-characters", "Characters");
  NavLinkClickExcept("navigate-to-locations", "Locations");
  NavLinkClickExcept("navigate-to-episodes", "Episodes");
}

describe("Tests for Router NavLink", () => {
  test("should navigate to the correct pages with NavLinks when route is '/'", () => {
    render(<App />);
    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/characters'", () => {
    render(<App />);
    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/location'", () => {
    render(<App />);
    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/episode'", () => {
    render(<App />);
    AllNavLinksClickExcept();
  });
});
