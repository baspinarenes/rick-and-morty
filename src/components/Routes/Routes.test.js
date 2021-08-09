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
import DetailPage from "../../views/DetailPage/DetailPage";

jest.mock("../PageHeader/PageHeader");
jest.mock("../../views/CharactersPage/CharactersPage");
jest.mock("../../views/EpisodesPage/EpisodesPage");
jest.mock("../../views/LocationsPage/LocationsPage");
jest.mock("../../views/NotFoundPage/NotFoundPage");
jest.mock("../../views/DetailPage/DetailPage");

describe("Tests for App Router", () => {
  it("should render PageHeader and CharactersPage when route is '/'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    CharactersPage.mockImplementation(() => <div>Fake CharactersPage</div>);

    render(
      <MemoryRouter>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake CharactersPage")).toBeInTheDocument();
  });

  it("should render PageHeader and CharactersPage when route is '/character'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    CharactersPage.mockImplementation(() => <div>Fake CharactersPage</div>);

    render(
      <MemoryRouter initialEntries={["/character"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake CharactersPage")).toBeInTheDocument();
  });

  it("should render PageHeader and DetailPage when route is '/character/:id'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    DetailPage.mockImplementation(() => <div>Fake DetailPage</div>);

    render(
      <MemoryRouter initialEntries={["/character/5"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake DetailPage")).toBeInTheDocument();
  });

  it("should render PageHeader and LocationsPage when route is '/location'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    LocationsPage.mockImplementation(() => <div>Fake LocationsPage</div>);

    render(
      <MemoryRouter initialEntries={["/location"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake LocationsPage")).toBeInTheDocument();
  });

  it("should render PageHeader and DetailPage when route is '/location/:id'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    DetailPage.mockImplementation(() => <div>Fake DetailPage</div>);

    render(
      <MemoryRouter initialEntries={["/location/5"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake DetailPage")).toBeInTheDocument();
  });

  it("should render PageHeader and EpisodesPage when route is '/episode'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    EpisodesPage.mockImplementation(() => <div>Fake EpisodesPage</div>);

    render(
      <MemoryRouter initialEntries={["/episode"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake EpisodesPage")).toBeInTheDocument();
  });

  it("should render PageHeader and DetailPage when route is '/episode/:id'", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    DetailPage.mockImplementation(() => <div>Fake DetailPage</div>);

    render(
      <MemoryRouter initialEntries={["/episode/5"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake DetailPage")).toBeInTheDocument();
  });

  it("should render PageHeader and NotFoundPage when route is invalid", () => {
    PageHeader.mockImplementation(() => <div>Fake PageHeader</div>);
    NotFoundPage.mockImplementation(() => <div>Fake NotFoundPage</div>);

    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake PageHeader")).toBeInTheDocument();
    expect(screen.getByText("Fake NotFoundPage")).toBeInTheDocument();
  });
});
