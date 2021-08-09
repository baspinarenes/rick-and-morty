import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LocationsPage from "./LocationsPage";
import Routes from "../../components/Routes/Routes";
import PageHeader from "../../components/PageHeader/PageHeader";

jest.mock("./LocationsPage");

describe("Tests for LocationsPage", () => {
  it("should render LocationsPage when create instance", () => {
    LocationsPage.mockImplementation(() => <div>Fake LocationsPage</div>);

    render(
      <MemoryRouter initialEntries={["/location"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake LocationsPage")).toBeInTheDocument();
  });
});
