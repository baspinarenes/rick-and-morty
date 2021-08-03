import React from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./LocationsPage.scss";

function LocationsPage() {
  return (
    <main
      data-testid="characters-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <Filters />
      <ItemList />
    </main>
  );
}

export default LocationsPage;
