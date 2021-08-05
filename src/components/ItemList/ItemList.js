import React from "react";
import "./ItemList.scss";
import InfiniteScroll from "react-infinite-scroll-component";

function ItemList({ characters, fetchMoreData, hasMore }) {
  const pathName = window.location.pathname;

  return (
    <section
      id="item-list"
      className="h-full w-11/12  tablet:overflow-hidden tablet:flex-1 tablet:flex tablet:flex-col"
    >
      <h2 className="text-">List of {pathName.slice(1)}s</h2>
      <div
        id="scrollableDiv"
        className="den tablet:overflow-y-scroll tablet:pr-5 h-full"
      >
        <InfiniteScroll
          dataLength={characters.length}
          className="grid grid-cols-1 laptop:grid-cols-2 largeDesktop:grid-cols-3 gap-2"
          next={fetchMoreData}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
        >
          {characters.map((char) => (
            <div
              className="card-container"
              style={{
                backgroundImage: `url(${char.image})`,
              }}
            />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}

export default ItemList;
