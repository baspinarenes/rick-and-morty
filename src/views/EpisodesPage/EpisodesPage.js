import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./EpisodesPage.scss";
import { getEpisode } from "../../utils/API";

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [filters, setFilters] = useState({
    name: "",
    episode: "",
  });

  const getFilteredEpisodes = async () => {
    const filteredEps = await getEpisode(filters);

    setEpisodes(filteredEps.data);
    setTotalDataCount(filteredEps.totalDataCount);

    return filteredEps;
  };

  useEffect(async () => {
    const eps = await getEpisode();
    setEpisodes(eps.data);
    setTotalDataCount(eps.totalDataCount);
  }, []);

  useEffect(() => {
    console.log("FILTERS: ", filters);
    setEpisodes([]); // eğer filtre varsa array'i sıfırla ki var olanın sonuna eklemesin
    getFilteredEpisodes();
  }, [filters]);

  const fetchMoreData = async () => {
    if (episodes.length < totalDataCount) {
      const oldEpisodes = [...episodes];
      const newEpisodes = await getEpisode({
        ...filters,
        page: Math.floor(oldEpisodes.length / 20) + 1,
      });

      if ("data" in newEpisodes) {
        setEpisodes([...oldEpisodes, ...newEpisodes.data]);
      }
    }
  };

  let pageCaps = null;

  if (totalDataCount < 41) {
    pageCaps = "/assets/filtered-list-caps.png";
  } else if (episodes?.length > 0) {
    pageCaps = "/assets/full-list-caps.png";
  } else {
    pageCaps = "/assets/empty-list-caps.png";
  }

  return (
    <main
      data-testid="episodes-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <aside
        id="filtersSection"
        className="w-11/12 tablet:flex-none tablet:w-3/12 h-full"
      >
        <h2 className="mb-3">Filter</h2>
        <Filters
          filterTypes={["name", "episode"]}
          filters={filters}
          setFilters={setFilters}
        />
        <img src={pageCaps} alt="" />
      </aside>
      <ItemList
        items={episodes}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
      />
    </main>
  );
}

export default EpisodesPage;
