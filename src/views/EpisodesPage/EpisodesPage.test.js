import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EpisodesPage from "./EpisodesPage";
import Routes from "../../components/Routes/Routes";
import PageHeader from "../../components/PageHeader/PageHeader";

jest.mock("./EpisodesPage");

describe("Tests for EpisodesPage", () => {
  it("should render EpisodesPage when create instance", () => {
    EpisodesPage.mockImplementation(() => <div>Fake EpisodesPage</div>);

    render(
      <MemoryRouter initialEntries={["/episode"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake EpisodesPage")).toBeInTheDocument();
  });
});
