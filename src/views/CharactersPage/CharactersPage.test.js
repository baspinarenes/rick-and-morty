import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Routes from "../../components/Routes/Routes";
import PageHeader from "../../components/PageHeader/PageHeader";
import CharactersPage from "./CharactersPage";

jest.mock("./CharactersPage");

describe("Tests for CharactersPage", () => {
  it("should render CharactersPage when create instance", () => {
    CharactersPage.mockImplementation(() => <div>Fake CharactersPage</div>);

    render(
      <MemoryRouter initialEntries={["/character"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake CharactersPage")).toBeInTheDocument();
  });
});
