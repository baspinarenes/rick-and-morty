import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import PageHeader from "../PageHeader/PageHeader";
import Routes from "./Routes";
import CharactersPage from "../../views/CharactersPage/CharactersPage";
import EpisodesPage from "../../views/EpisodesPage/EpisodesPage";
import LocationsPage from "../../views/LocationsPage/LocationsPage";
import NotFoundPage from "../../views/NotFoundPage/NotFoundPage";

/* 
  Note: Unit tests for routing should be independent of component content. 
  That's why we're doing the mocking. 
*/
jest.mock("../PageHeader/PageHeader");
jest.mock("../../views/CharactersPage/CharactersPage");
jest.mock("../../views/EpisodesPage/EpisodesPage");
jest.mock("../../views/LocationsPage/LocationsPage");
jest.mock("../../views/NotFoundPage/NotFoundPage");

describe("Tests for App Router", () => {
  test("Should render PageHeader and CharactersPage when route is '/'", () => {
    // Arange
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    CharactersPage.mockImplementation(() => <div>Fake CharactersPage</div>);

    // Act
    render(
      <MemoryRouter>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake CharactersPage")).toBeInTheDocument();
  });

  test("Should render PageHeader and CharactersPage when route is '/character'", () => {
    // Arange
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    CharactersPage.mockImplementation(() => <div>Fake CharactersPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={["/character"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake CharactersPage")).toBeInTheDocument();
  });

  test("Should render PageHeader and LocationsPage when route is '/location'", () => {
    // Arange
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    LocationsPage.mockImplementation(() => <div>Fake LocationsPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={["/location"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake LocationsPage")).toBeInTheDocument();
  });

  test("Should render PageHeader and EpisodesPage when route is '/episode'", () => {
    // Arange
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    EpisodesPage.mockImplementation(() => <div>Fake EpisodesPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={["/episode"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake EpisodesPage")).toBeInTheDocument();
  });

  test("Should render PageHeader and NotFoundPage when route is invalid", () => {
    // Arange
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    NotFoundPage.mockImplementation(() => <div>Fake NotFoundPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake NotFoundPage")).toBeInTheDocument();
  });
});
