import React from "react";
import "./DetailContent.scss";
import EpisodeList from "../EpisodeList/EpisodeList";

function DetailContent({ item }) {
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
    .filter((info) => !!info)[0];
  console.log("ARRAYINFO: ", arrayInfo);

  return (
    !!arrayInfo && (
      <div id="detail-content" className="desktop:h-1/2 flex flex-col">
        <ul id="info-list" className="capitalize flex flex-col border-b-2 py-4">
          {textInfos.map(([infoType, infoValue]) => (
            <li className="flex">
              <h4>{infoType}:</h4>
              <span className="text-2xl font-bold">
                {infoValue || "Unknown"}
              </span>
            </li>
          ))}
        </ul>

        <EpisodeList arrayInfo={arrayInfo} />
      </div>
    )
  );
}

export default DetailContent;
