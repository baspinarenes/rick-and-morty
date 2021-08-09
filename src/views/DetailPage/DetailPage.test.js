import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DetailPage from "./DetailPage";
import Routes from "../../components/Routes/Routes";
import PageHeader from "../../components/PageHeader/PageHeader";

jest.mock("./DetailPage");

describe("Tests for DetailPage", () => {
  it("should render DetailPage when create instance", () => {
    DetailPage.mockImplementation(() => <div>Fake DetailPage</div>);

    render(
      <MemoryRouter initialEntries={["/location/2"]}>
        <PageHeader />
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("Fake DetailPage")).toBeInTheDocument();
  });
});
