import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DetailHeader from "./DetailHeader";

describe("Tests for CharactersPage", () => {
  it("should render CharactersPage when create instance", () => {
    render(<DetailHeader image="" name="Rick Sanchez" />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
