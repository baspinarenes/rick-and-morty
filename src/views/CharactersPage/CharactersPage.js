import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./CharactersPage.scss";
import { getCharacter } from "../../utils/API";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    species: "",
    gender: "",
    status: "",
  });

  const getFilteredCharacters = async () => {
    const filteredChars = await getCharacter(filters);
    console.log("DATA: ", filteredChars);
    setCharacters(filteredChars.data);
    setTotalDataCount(filteredChars.totalDataCount);
    return filteredChars;
  };

  useEffect(async () => {
    const chars = await getCharacter();
    setCharacters(chars.data);
    setTotalDataCount(chars.totalDataCount);
  }, []);

  useEffect(() => {
    getFilteredCharacters();
  }, [filters]);

  const fetchMoreData = async () => {
    if (characters.length >= totalDataCount) {
      setHasMore(false);
      return;
    }
    const oldCharacters = [...characters];
    const newCharacters = await getCharacter({
      ...filters,
      page: Math.floor(oldCharacters.length / 20) + 1,
    });
    if ("data" in newCharacters) {
      setCharacters([...oldCharacters, ...newCharacters.data]);
    }
  };

  console.log(filters);

  return (
    <main
      data-testid="characters-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <Filters
        filterTypes={["name", "type", "species", "gender", "status"]}
        filters={filters}
        setFilters={setFilters}
      />
      <ItemList
        items={characters}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </main>
  );
}

export default CharactersPage;
