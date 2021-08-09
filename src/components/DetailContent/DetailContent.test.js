import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DetailContent from "./DetailContent";

describe("Tests for DetailContent", () => {
  it("should render episode list when pathName is 'character'", () => {
    const item = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    };
    const pathName = "character";

    render(<DetailContent item={item} pathName={pathName} />);
    expect(screen.getByText("Last Episodes")).toBeInTheDocument();
  });

  it("should render character list when pathName is 'episode|location'", () => {
    const item = {
      id: 1,
      name: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
      characters: ["https://rickandmortyapi.com/api/character/1"],
      url: "https://rickandmortyapi.com/api/episode/1",
      created: "2017-11-10T12:56:33.798Z",
    };
    const pathName = "episode";

    render(<DetailContent item={item} pathName={pathName} />);
    expect(screen.getByText(/(Residents|Characters)/)).toBeInTheDocument();
  });
});
