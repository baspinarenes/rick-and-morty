import React from "react";

function ItemList() {
  const pathName = window.location.pathname;

  return (
    <section className="tablet:flex-1">
      <h2>List of {pathName.slice(1)}s</h2>
    </section>
  );
}

export default ItemList;
