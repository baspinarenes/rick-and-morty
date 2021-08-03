import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PageHeader from "./components/PageHeader/PageHeader";
import Routes from "./components/Routes/Routes";

function NavLinkClickExcept(testId, content) {
  fireEvent.click(screen.getByTestId(testId));

  expect(document.querySelector("main").textContent).toBe(content);
}

function AllNavLinksClickExcept() {
  NavLinkClickExcept("navigate-to-home", "Characters Content");

  NavLinkClickExcept("navigate-to-characters", "Characters Content");

  NavLinkClickExcept("navigate-to-locations", "Locations Content");

  NavLinkClickExcept("navigate-to-episodes", "Episodes Content");
}

describe("Tests for Router NavLink", () => {
  test("should navigate to the correct pages with NavLinks when route is '/'", () => {
    render(
      <MemoryRouter>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/characters'", () => {
    render(
      <MemoryRouter initialEntries={["/character"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/location'", () => {
    render(
      <MemoryRouter initialEntries={["/location"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    AllNavLinksClickExcept();
  });

  test("should navigate to the correct pages with NavLinks when route is '/episode'", () => {
    render(
      <MemoryRouter initialEntries={["/episode"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    AllNavLinksClickExcept();
  });
});
