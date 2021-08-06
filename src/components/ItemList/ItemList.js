import React from "react";
import "./ItemList.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function ItemList({ items, totalDataCount, fetchMoreData }) {
  const pathName = window.location.pathname.replace(/\/([a-zA-Z-]+)\//, "");

  function getSummaryInfos(item) {
    const filteredInfos = Object.entries(item)
      .map(
        ([key, value]) =>
          (!["name", "image", "url", "created", "type"].includes(key) ||
            (pathName === "/location" && key === "type")) &&
          typeof value === "string" && [key, value]
      )
      .filter((info) => info[1] !== "" && info[1] !== "unknown")
      .filter((info) => info);

    return pathName === "/episode" ? filteredInfos.reverse() : filteredInfos;
  }

  return (
    <section
      id="item-list"
      className="h-full w-11/12  tablet:overflow-hidden tablet:flex-1 tablet:flex tablet:flex-col"
    >
      <div className="laptop:flex laptop:justify-between laptop:items-end">
        <h2 className="text-">List of {pathName.slice(1)}s</h2>
        <p className="mb-5 text-gray-500">
          {items?.length || 0} of {totalDataCount || 0} items listed.
        </p>
      </div>

      {!items ? null : (
        <div
          id="scrollableDiv"
          className="custom-scrollbar tablet:overflow-y-scroll tablet:pr-5 h-full"
        >
          <InfiniteScroll
            dataLength={items.length}
            className="grid grid-cols-1 laptop:grid-cols-2 largeDesktop:grid-cols-3 gap-2"
            next={fetchMoreData}
            hasMore
            scrollableTarget="scrollableDiv"
          >
            {items.map((item) => (
              <Link
                to={`${pathName}/${item.id}`}
                className="card-link"
                key={item.id}
              >
                <div
                  key={item.id}
                  className="card-container flex items-end border border-gray-300"
                >
                  <img
                    className="card-bg"
                    src={item.image || "/assets/placeholder.png"}
                    alt=""
                  />
                  <div className="card-content w-full">
                    <h3 className="text-black font-black border-b-4 border-black p-2 text-center tablet:text-left">
                      {item.name}
                    </h3>
                    <ul className="flex flex-wrap p-2 justify-center tablet:justify-start">
                      {getSummaryInfos(item).map((info) => (
                        <li
                          key={info[0]}
                          className="uppercase text-green-600 font-bold text-xl text-center"
                        >
                          {info[1]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </section>
  );
}

export default ItemList;
