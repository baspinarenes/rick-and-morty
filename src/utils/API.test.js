import "@testing-library/jest-dom";
import { getCharacter, getLocation, getEpisode, getEndpoint } from "./API";

describe("Tests for API", () => {
  describe("Tests for getEndpoint()", () => {
    it("should be succesfull fetching with filter", async () => {
      const filteredData = [
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
      ];

      const fethedData = await getEndpoint("character", {
        name: "Rick",
        gender: "Female",
      });
      expect(fethedData).toEqual(filteredData);
    });
  });

  describe("Tests for getCharacter()", () => {
    it("should be succesfull fetching from API", async () => {
      const data = await getCharacter();
      expect(data.length > 0).toBeTruthy();
    });

    it("should get spesific character when filters object has id", async () => {
      const data = await getCharacter({ id: 1 });
      expect(data.name).toEqual("Rick Sanchez");
    });

    it("should get spesific character when filters object has id array", async () => {
      const data = await getCharacter({ id: [1, 2] });
      expect(data.length).toBe(2);
    });

    it("should be returned character(s) when filtering is valid", async () => {
      const data = await getCharacter({
        name: "Rick",
        gender: "Male",
      });

      expect(data.error).toBeUndefined();
    });

    it("should be returned error when filtering is invalid", async () => {
      const data = await getCharacter({
        name: "Invalid",
      });

      expect(data.error).not.toBeUndefined();
    });
  });

  describe("Tests for getLocation()", () => {
    it("should be succesfull fetching from API", async () => {
      const data = await getLocation();
      expect(data.length > 0).toBeTruthy();
    });

    it("should get spesific location when filters object has id", async () => {
      const data = await getLocation({ id: 1 });
      expect(data.name).toEqual("Earth (C-137)");
    });

    it("should get spesific location when filters object has id array", async () => {
      const data = await getLocation({ id: [1, 2] });
      expect(data.length).toBe(2);
    });

    it("should be returned location(s) when filtering is valid", async () => {
      const data = await getLocation({
        type: "Space station",
      });

      expect(data.error).toBeUndefined();
    });

    it("should be returned error when filtering is invalid", async () => {
      const data = await getLocation({
        name: "Invalid",
      });

      expect(data.error).not.toBeUndefined();
    });
  });

  describe("Tests for getEpisode()", () => {
    it("should be succesfull fetching from API", async () => {
      const data = await getEpisode();
      expect(data.length > 0).toBeTruthy();
    });

    it("should get spesific episode when filters object has id", async () => {
      const data = await getEpisode({ id: 1 });
      expect(data.name).toEqual("Pilot");
    });

    it("should get spesific episode when filters object has id array", async () => {
      const data = await getEpisode({ id: [1, 2] });
      expect(data.length).toBe(2);
    });

    it("should be returned getEpisode(s) when filtering is valid", async () => {
      const data = await getEpisode({
        episode: "S01E01",
      });

      expect(data.error).toBeUndefined();
    });

    it("should be returned error when filtering is invalid", async () => {
      const data = await getEpisode({
        name: "Invalid",
      });

      expect(data.error).not.toBeUndefined();
    });
  });
});
