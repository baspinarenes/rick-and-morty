import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharacterList from "./CharacterList";

describe("Tests for CharacterList", () => {
  it("should render when given character links", () => {
    const fakeData = [
      "residents",
      [
        "https://rickandmortyapi.com/api/character/89",
        "https://rickandmortyapi.com/api/character/399",
        "https://rickandmortyapi.com/api/character/400",
      ],
    ];
    render(<CharacterList arrayInfo={fakeData} />);

    expect(screen.getByText("Residents")).toBeInTheDocument();
  });
});
