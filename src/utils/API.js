import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";

export const getFiltersQuery = (filters) => {
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

export const getData = async (endpointUrl) => {
  const url = `${baseUrl}${endpointUrl}`;
  let response;

  try {
    response = await axios.get(url);

    if ("error" in response.data) {
      throw new Error(response.data.error);
    }
  } catch (err) {
    return err.message;
  }

  /* 
    Raw data;
    - /character -> data.results (array)
    - /character/1 -> data (object)
    - /character/1,2,3 -> data (array)
    - /character/?name="Rick" -> data.results (array)
  */

  const { data } = response;

  if ("results" in data) {
    return {
      totalDataCount: data.info?.count,
      data: data.results,
    };
  }

  return { data };
};

export const getEndpoint = async (endpoint = "", filters = {}) => {
  const filtersQuery = getFiltersQuery(filters);
  const data = await getData(endpoint + filtersQuery);

  return data;
};

export const getItems = async (apiLinks) => {
  const responses = await Promise.allSettled(
    apiLinks.map((link) =>
      getData(link.replace("https://rickandmortyapi.com/api/", ""))
    )
  );

  const data = responses.map((response) => response.value.data);

  return data;
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

export default {
  character: getCharacter,
  location: getLocation,
  episode: getEpisode,
  items: getItems,
};
