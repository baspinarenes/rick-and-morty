import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PageHeader from "./components/PageHeader/PageHeader";
import Routes from "./components/Routes/Routes";

describe("Tests for Router NavLink", () => {
  test("should navigate to the correct pages with NavLinks when route is '/'", () => {
    render(
      <MemoryRouter>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("navigate-to-home"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-characters"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-locations"));

    expect(document.querySelector("main").textContent).toBe(
      "Locations Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-episodes"));

    expect(document.querySelector("main").textContent).toBe("Episodes Content");
  });

  test("should navigate to the correct pages with NavLinks when route is '/characters'", () => {
    render(
      <MemoryRouter initialEntries={["/character"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("navigate-to-home"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-characters"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-locations"));

    expect(document.querySelector("main").textContent).toBe(
      "Locations Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-episodes"));

    expect(document.querySelector("main").textContent).toBe("Episodes Content");
  });

  test("should navigate to the correct pages with NavLinks when route is '/location'", () => {
    render(
      <MemoryRouter initialEntries={["/location"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("navigate-to-home"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-characters"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-locations"));

    expect(document.querySelector("main").textContent).toBe(
      "Locations Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-episodes"));

    expect(document.querySelector("main").textContent).toBe("Episodes Content");
  });

  test("should navigate to the correct pages with NavLinks when route is '/episode'", () => {
    render(
      <MemoryRouter initialEntries={["/episode"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("navigate-to-home"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-characters"));

    expect(document.querySelector("main").textContent).toBe(
      "Characters Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-locations"));

    expect(document.querySelector("main").textContent).toBe(
      "Locations Content"
    );

    fireEvent.click(screen.getByTestId("navigate-to-episodes"));

    expect(document.querySelector("main").textContent).toBe("Episodes Content");
  });
});
