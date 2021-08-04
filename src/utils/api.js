import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";

const getFiltersQuery = (filters) => {
  if ("id" in filters) {
    return `/${filters.id}`;
  }

  const filterTexts = Object.entries(filters).map(
    ([type, value]) => `${type}=${value}`
  );

  return `/?${filterTexts.join("&")}`;
};

const getData = async (endpointUrl) => {
  const url = `${baseUrl}${endpointUrl}`;
  console.log("URL: ", url);
  const response = await axios.get(url);
  const { data } = response;
  const { info, results } = data;

  // const { count, pages, next, prev } = info;
  return results;
};

const getEndpoint = async (endpoint = "", filters = {}) => {
  try {
    const filtersQuery = getFiltersQuery(filters);
    const rawData = await getData(endpoint + filtersQuery);
    return rawData;
  } catch (e) {
    return {
      status: e.statusCode,
      error: e.message,
    };
  }
};

/*
All filters: {
  Characters: name, status, species, type, gender
  Locations: name, type, dimension
  Episodes: name, episode
}
*/

const getCharacter = (filters) => getEndpoint("character", filters);
const getLocation = (filters) => getEndpoint("location", filters);
const getEpisode = (filters) => getEndpoint("episode", filters);
