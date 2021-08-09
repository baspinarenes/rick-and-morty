import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ItemList from "./ItemList";

describe("Tests for DetailContent", () => {
  it("should render item list when pathName is 'character'", () => {
    const items = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z",
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
        ],
        url: "https://rickandmortyapi.com/api/character/3",
        created: "2017-11-04T19:09:56.428Z",
      },
    ];
    const pathName = "character";

    render(
      <MemoryRouter>
        <ItemList
          items={items}
          totalDataCount={671}
          fetchMoreData={null}
          pathName={pathName}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("List of characters")).toBeInTheDocument();
  });
});
