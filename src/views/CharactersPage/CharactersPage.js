import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./CharactersPage.scss";
import getAPI from "../../utils/API";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    species: "",
    gender: "",
    status: "",
  });

  const getFilteredCharacters = async () => {
    const filteredChars = await getAPI.character(filters);

    setCharacters(filteredChars.data);
    setTotalDataCount(filteredChars.totalDataCount);

    return filteredChars;
  };

  useEffect(async () => {
    const chars = await getAPI.character();
    setCharacters(chars.data);
    setTotalDataCount(chars.totalDataCount);
  }, []);

  useEffect(() => {
    setCharacters([]); // eğer filtre varsa array'i sıfırla ki var olanın sonuna eklemesin
    getFilteredCharacters();
  }, [filters]);

  const fetchMoreData = async () => {
    if (characters.length < totalDataCount) {
      const oldCharacters = [...characters];
      const newCharacters = await getAPI.character({
        ...filters,
        page: Math.floor(oldCharacters.length / 20) + 1,
      });

      if ("data" in newCharacters) {
        setCharacters([...oldCharacters, ...newCharacters.data]);
      }
    }
  };

  let pageCaps = null;

  if (characters?.length !== 0) {
    if (!totalDataCount || totalDataCount === 0) {
      pageCaps = "./assets/empty-list-caps.png";
    } else if (totalDataCount < 671) {
      pageCaps = "./assets/filtered-list-caps.png";
    } else if (totalDataCount === 671) {
      pageCaps = "./assets/full-list-caps.png";
    } else {
      pageCaps = "";
    }
  }

  return (
    <main
      data-testid="characters-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <aside
        id="filtersSection"
        className="w-11/12 tablet:flex-none tablet:w-3/12 h-full"
      >
        <h2 className="mb-3">Filter</h2>
        <Filters
          filterTypes={["name", "type", "species", "gender", "status"]}
          filters={filters}
          setFilters={setFilters}
        />
        <img src={pageCaps} alt="" />
      </aside>
      <ItemList
        items={characters}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
        pathName="character"
      />
    </main>
  );
}

export default CharactersPage;
