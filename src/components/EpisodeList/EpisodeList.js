import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAPI from "../../utils/API";

function EpisodeList({ arrayInfo }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(async () => {
    const lastFiveEpisodeLinks = arrayInfo[1]
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 5);
    const lastFiveEpisode = await getAPI.items(lastFiveEpisodeLinks);

    setEpisodes(lastFiveEpisode);
  }, []);

  return (
    <div id="episode-list" className="px-5 w-full">
      <h2 className="mt-5 text-center">Last Episodes</h2>
      <ul className="uppercase items-center w-full py-4 flex flex-col flex-wrap">
        {episodes.map((episode) => (
          <li key={episode.id} className="flex text-center">
            <Link to={`/episode/${episode.id}`} className="episode-link">
              <span className="text-2xl">
                <span className="text-2xl font-bold text-gray-500 m-0 mr-2">
                  ep{episode.id}
                </span>
                {episode.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodeList;
