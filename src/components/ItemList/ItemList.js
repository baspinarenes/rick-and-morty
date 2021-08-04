import React from "react";

import "./ItemList.scss";

function ItemList() {
  const pathName = window.location.pathname;

  return (
    <section
      id="item-list"
      className="h-full w-11/12  tablet:overflow-hidden tablet:flex-1 tablet:flex tablet:flex-col"
    >
      <h2 className="text-">List of {pathName.slice(1)}s</h2>
      <ul className="grid grid-cols-1 tablet:overflow-y-scroll laptop:grid-cols-2 largeDesktop:grid-cols-3 gap-2 tablet:pr-5 h-full">
        <li
          className="card-container"
          style={{
            backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")`,
          }}
        />
        <li
          className="card-container"
          style={{
            backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")`,
          }}
        />
        <li
          className="card-container"
          style={{
            backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")`,
          }}
        />
        <li
          className="card-container"
          style={{
            backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")`,
          }}
        />
        <li
          className="card-container"
          style={{
            backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")`,
          }}
        />
      </ul>
    </section>
  );
}

export default ItemList;
