import React from "react";
import "./DetailContent.scss";
import EpisodeList from "../EpisodeList/EpisodeList";
import CharacterList from "../CharacterList/CharacterList";

function DetailContent({ item, pathName }) {
  const textInfos = Object.entries(item)
    .map(
      ([key, value]) =>
        !["name", "image", "url", "created"].includes(key) &&
        typeof value === "string" && [key, value]
    )
    .filter((info) => !!info);

  const arrayInfo = Object.entries(item)
    .filter(
      ([key, value]) =>
        ["episode", "residents", "characters"].includes(key) && value
    )
    .filter((info) => !!info)
    .slice(-1)[0]; // son öğeyi al

  const path = pathName;

  return (
    !!arrayInfo && (
      <div id="detail-content" className="flex flex-col">
        <ul id="info-list" className="capitalize flex flex-col border-b-2 py-4">
          {textInfos.map(([infoType, infoValue]) => (
            <li className="flex" key={infoType}>
              <h4>{infoType.split("_")}:</h4>
              <span className="text-2xl font-bold">
                {infoValue || "Unknown"}
              </span>
            </li>
          ))}
        </ul>

        {path === "character" ? (
          <EpisodeList arrayInfo={arrayInfo} />
        ) : (
          <CharacterList arrayInfo={arrayInfo} />
        )}
      </div>
    )
  );
}

export default DetailContent;
