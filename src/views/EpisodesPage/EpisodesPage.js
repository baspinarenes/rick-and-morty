import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./EpisodesPage.scss";
import { getEpisode } from "../../utils/API";

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(async () => {
    const eps = await getEpisode();
    setEpisodes(eps.data);
    setTotalDataCount(eps.totalDataCount);
  }, []);

  const fetchMoreData = async () => {
    if (episodes.length >= totalDataCount) {
      setHasMore(false);
      return;
    }

    const oldEpisodes = [...episodes];
    const newEpisodes = await getEpisode({
      page: Math.floor(oldEpisodes.length / 20) + 1,
    });

    if ("data" in newEpisodes) {
      setEpisodes([...oldEpisodes, ...newEpisodes.data]);
    }
  };
  return episodes ? (
    <main
      data-testid="episodes-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <Filters />
      <ItemList
        items={episodes}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </main>
  ) : (
    <p>Data not found!</p>
  );
}

export default EpisodesPage;
