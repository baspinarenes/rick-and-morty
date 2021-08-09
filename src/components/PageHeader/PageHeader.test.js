import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageHeader from "./PageHeader";

describe("Tests for CharactersPage", () => {
  it("should render CharactersPage when create instance", () => {
    render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    );

    expect(screen.getByText("Characters")).toBeInTheDocument();
  });
});
