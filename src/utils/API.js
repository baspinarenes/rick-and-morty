import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";

const getFiltersQuery = (filters) => {
  if (Object.keys(filters) <= 0) {
    return "";
  }

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
  const response = await axios.get(url);

  const { info, results } = response.data;
  /* 
    Raw data;
    - /character -> data.results (array)
    - /character/1 -> data (object)
    - /character/1,2,3 -> data (array)
    - /character/?name="Rick" -> data.results (array)
  */

  if (Array.isArray(results) || results?.id) {
    return { data: results, totalDataCount: info.count };
  }

  return { data: results.results, totalDataCount: info.count };
};

export const getEndpoint = async (endpoint = "", filters = {}) => {
  try {
    const filtersQuery = getFiltersQuery(filters);
    const rawData = await getData(endpoint + filtersQuery);
    return rawData;
  } catch (e) {
    return {
      status: e.status,
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

export const getCharacter = (filters) => getEndpoint("character", filters);
export const getLocation = (filters) => getEndpoint("location", filters);
export const getEpisode = (filters) => getEndpoint("episode", filters);

getCharacter({ page: 35 });
