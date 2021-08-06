import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAPI from "../../utils/API";
import "./CharacterList.scss";

function CharacterList({ arrayInfo }) {
  const [characters, setCharacters] = useState([]);
  useEffect(async () => {
    const characterLinks = arrayInfo[1];

    const lastFiveEpisode = await getAPI.items(characterLinks);

    setCharacters(lastFiveEpisode);
  }, []);

  const listTitle = arrayInfo[0][0].toUpperCase() + arrayInfo[0].slice(1);

  return (
    <div id="character-list" className="px-10">
      <h2 className="mt-5 text-center">{listTitle}</h2>
      <ul className="uppercase items-center justify-center w-full py-4 flex flex-wrap flex-1">
        {characters.map((char) => (
          <li
            key={char.id}
            className="flex flex-col items-center text-center p-1"
          >
            <Link to={`/character/${char.id}`} className="character-link">
              <img src={char.image} alt="" className="rounded-full w-16" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
