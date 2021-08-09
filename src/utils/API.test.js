import "@testing-library/jest-dom";
import axios from "axios";
import {
  getFiltersQuery,
  getEndpoint,
  getCharacter,
  getLocation,
  getEpisode,
  getItems,
  getData,
} from "./API";

jest.mock("axios");

describe("Tests for API", () => {
  describe("Tests for getFiltersQuery()", () => {
    it("should be return query string with the given filters", () => {
      expect(getFiltersQuery({})).toEqual("");
      expect(getFiltersQuery({ id: 1 })).toEqual("/1");
      expect(getFiltersQuery({ id: [1, 2, 3, 4] })).toEqual("/1,2,3,4");
      expect(getFiltersQuery({ id: 1, name: "Rick" })).toEqual("/1");
      expect(getFiltersQuery({ name: "Rick", gender: "Female" })).toEqual(
        "/?name=Rick&gender=Female"
      );
    });
  });

  describe("Tests for getData()", () => {
    it("should return error when endpoint is invalid", async () => {
      const fakeData = {
        data: {
          error: "There is nothing here",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getData("characters");

      expect(fetchedData).toEqual("There is nothing here");
    });
  });

  describe("Tests for getEndpoint()", () => {
    it("should return endpoint list when endpoint and filter are empty", async () => {
      axios.get.mockResolvedValue({
        data: {
          characters: "https://rickandmortyapi.com/api/character",
          locations: "https://rickandmortyapi.com/api/location",
          episodes: "https://rickandmortyapi.com/api/episode",
        },
      });

      await expect(getEndpoint()).resolves.toEqual({
        data: {
          characters: "https://rickandmortyapi.com/api/character",
          locations: "https://rickandmortyapi.com/api/location",
          episodes: "https://rickandmortyapi.com/api/episode",
        },
      });
    });

    it("should return successful result when only if endpoint", async () => {
      const fakeData = {
        data: {
          info: {
            count: 671,
            pages: 34,
            next: "https://rickandmortyapi.com/api/character?page=2",
            prev: null,
          },
          results: [
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
          ],
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getEndpoint("character");

      expect(fetchedData).toEqual({
        totalDataCount: 671,
        data: [
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
        ],
      });
    });

    it("should return result when endpoint and filters are filled", async () => {
      const fakeData = {
        data: {
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 381,
              name: "Woman Rick",
              status: "Alive",
              species: "Alien",
              type: "Chair",
              gender: "Female",
              origin: {
                name: "unknown",
                url: "",
              },
              location: {
                name: "unknown",
                url: "",
              },
              image:
                "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
              episode: ["https://rickandmortyapi.com/api/episode/10"],
              url: "https://rickandmortyapi.com/api/character/381",
              created: "2018-01-10T19:46:00.622Z",
            },
          ],
        },
      };

      axios.get.mockResolvedValue(fakeData);

      await expect(
        getEndpoint("character", {
          name: "Rick",
          gender: "Female",
        })
      ).resolves.toEqual({
        totalDataCount: 1,
        data: [
          {
            id: 381,
            name: "Woman Rick",
            status: "Alive",
            species: "Alien",
            type: "Chair",
            gender: "Female",
            origin: {
              name: "unknown",
              url: "",
            },
            location: {
              name: "unknown",
              url: "",
            },
            image: "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/10"],
            url: "https://rickandmortyapi.com/api/character/381",
            created: "2018-01-10T19:46:00.622Z",
          },
        ],
      });
    });

    it("should return endpoint list when endpoint is wrong", async () => {
      const fakeData = {
        data: {
          error: "There is nothing here",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getEndpoint("characterss");
      expect(fetchedData).toBe("There is nothing here");
    });
  });

  describe("Tests for getCharacter()", () => {
    it("should return result when filters has id", async () => {
      const fakeData = {
        data: {
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
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getCharacter({
        id: 1,
      });

      expect(fetchedData).toEqual(fakeData);
    });

    it("should return result when filters has ids", async () => {
      const fakeData = {
        data: [
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
        ],
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getCharacter({
        id: [1, 2],
      });

      expect(fetchedData.data.length).toBe(2);
    });

    it("should return error when filtering is invalid", async () => {
      const fakeData = {
        data: {
          error: "There is nothing here",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getCharacter({
        name: "Invalid",
      });

      expect(fetchedData).toBe("There is nothing here");
    });
  });

  describe("Tests for getLocation()", () => {
    it("should return result when filters has id", async () => {
      const fakeData = {
        data: {
          id: 5,
          name: "Anatomy Park",
          type: "Microverse",
          dimension: "Dimension C-137",
          residents: ["https://rickandmortyapi.com/api/character/12"],
          url: "https://rickandmortyapi.com/api/location/5",
          created: "2017-11-10T13:08:46.060Z",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getLocation({
        id: 5,
      });

      expect(fetchedData).toEqual(fakeData);
    });

    it("should return result when filters has ids", async () => {
      const fakeData = {
        data: [
          {
            id: 5,
            name: "Anatomy Park",
            type: "Microverse",
            dimension: "Dimension C-137",
            residents: [
              "https://rickandmortyapi.com/api/character/12",
              "https://rickandmortyapi.com/api/character/17",
            ],
            url: "https://rickandmortyapi.com/api/location/5",
            created: "2017-11-10T13:08:46.060Z",
          },
          {
            id: 8,
            name: "Post-Apocalyptic Earth",
            type: "Planet",
            dimension: "Post-Apocalyptic Dimension",
            residents: [
              "https://rickandmortyapi.com/api/character/25",
              "https://rickandmortyapi.com/api/character/52",
            ],
            url: "https://rickandmortyapi.com/api/location/8",
            created: "2017-11-10T13:09:22.551Z",
          },
          {
            id: 11,
            name: "Bepis 9",
            type: "Planet",
            dimension: "unknown",
            residents: ["https://rickandmortyapi.com/api/character/35"],
            url: "https://rickandmortyapi.com/api/location/11",
            created: "2017-11-18T11:26:03.325Z",
          },
        ],
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getLocation({
        id: [5, 8, 11],
      });

      expect(fetchedData.data.length).toBe(3);
    });

    it("should return error when filtering is invalid", async () => {
      const fakeData = {
        data: {
          error: "There is nothing here",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getLocation({
        name: "Invalid",
      });

      expect(fetchedData).toBe("There is nothing here");
    });
  });

  describe("Tests for getEpisode()", () => {
    it("should return result when filters has id", async () => {
      const fakeData = {
        data: {
          id: 21,
          name: "The Wedding Squanchers",
          air_date: "October 4, 2015",
          episode: "S02E10",
          characters: [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
          ],
          url: "https://rickandmortyapi.com/api/episode/21",
          created: "2017-11-10T12:56:35.875Z",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getEpisode({
        id: 21,
      });

      expect(fetchedData).toEqual(fakeData);
    });

    it("should return result when filters has ids", async () => {
      const fakeData = {
        data: [
          {
            id: 7,
            name: "Raising Gazorpazorp",
            air_date: "March 10, 2014",
            episode: "S01E07",
            characters: [
              "https://rickandmortyapi.com/api/character/1",
              "https://rickandmortyapi.com/api/character/2",
            ],
            url: "https://rickandmortyapi.com/api/episode/7",
            created: "2017-11-10T12:56:34.441Z",
          },
          {
            id: 21,
            name: "The Wedding Squanchers",
            air_date: "October 4, 2015",
            episode: "S02E10",
            characters: [
              "https://rickandmortyapi.com/api/character/1",
              "https://rickandmortyapi.com/api/character/2",
            ],
            url: "https://rickandmortyapi.com/api/episode/21",
            created: "2017-11-10T12:56:35.875Z",
          },
        ],
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getEpisode({
        id: [7, 21],
      });

      expect(fetchedData.data.length).toBe(2);
    });

    it("should return error when filtering is invalid", async () => {
      const fakeData = {
        data: {
          error: "There is nothing here",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getEpisode({
        name: "Invalid",
      });

      expect(fetchedData).toBe("There is nothing here");
    });
  });

  describe("Tests for getItems()", () => {
    it("should return array when given item links", async () => {
      const fakeData = {
        data: {
          id: 21,
          name: "The Wedding Squanchers",
          air_date: "October 4, 2015",
          episode: "S02E10",
          characters: [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
          ],
          url: "https://rickandmortyapi.com/api/episode/21",
          created: "2017-11-10T12:56:35.875Z",
        },
      };

      axios.get.mockResolvedValue(fakeData);

      const fetchedData = await getItems([
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/21",
      ]);

      expect(fetchedData.length).toBe(2);
    });
  });
});
