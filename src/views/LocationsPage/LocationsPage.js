import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./LocationsPage.scss";
import { getLocation } from "../../utils/API";

function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  useEffect(async () => {
    const eps = await getLocation();
    setLocations(eps.data);
    setTotalDataCount(eps.totalDataCount);
  }, []);

  const fetchMoreData = async () => {
    if (locations.length >= totalDataCount) {
      setHasMore(false);
      return;
    }

    const oldLocations = [...locations];
    const newLocations = await getLocation({
      page: Math.floor(oldLocations.length / 20) + 1,
    });

    if ("data" in newLocations) {
      setLocations([...oldLocations, ...newLocations.data]);
    }
  };

  const getFilteredLocations = () => locations;

  console.log(filters);

  return locations ? (
    <main
      data-testid="locations-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <Filters
        filterTypes={["name", "type", "dimension"]}
        filters={filters}
        setFilters={setFilters}
      />
      <ItemList
        items={getFilteredLocations()}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </main>
  ) : (
    <p>Data not found!</p>
  );
}

export default LocationsPage;
