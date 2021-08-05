import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import ItemList from "../../components/ItemList/ItemList";
import "./LocationsPage.scss";
import { getAPI } from "../../utils/API";

function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  const getFilteredLocations = async () => {
    const filteredLocs = await getAPI.location(filters);

    setLocations(filteredLocs.data);
    setTotalDataCount(filteredLocs.totalDataCount);

    return filteredLocs;
  };

  useEffect(async () => {
    const eps = await getAPI.location();
    setLocations(eps.data);
    setTotalDataCount(eps.totalDataCount);
  }, []);

  useEffect(() => {
    setLocations([]); // eğer filtre varsa array'i sıfırla ki var olanın sonuna eklemesin
    getFilteredLocations();
  }, [filters]);

  const fetchMoreData = async () => {
    if (locations.length < totalDataCount) {
      const oldLocations = [...locations];
      const newLocations = await getAPI.location({
        ...filters,
        page: Math.floor(oldLocations.length / 20) + 1,
      });

      if ("data" in newLocations) {
        setLocations([...oldLocations, ...newLocations.data]);
      }
    }
  };

  let pageCaps = null;

  if (totalDataCount < 108) {
    pageCaps = "/assets/filtered-list-caps.png";
  } else if (locations?.length > 0) {
    pageCaps = "/assets/full-list-caps.png";
  } else {
    pageCaps = "/assets/empty-list-caps.png";
  }

  return (
    <main
      data-testid="locations-main"
      className="bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16"
    >
      <aside
        id="filtersSection"
        className="w-11/12 tablet:flex-none tablet:w-3/12 h-full"
      >
        <h2 className="mb-3">Filter</h2>
        <Filters
          filterTypes={["name", "type", "dimension"]}
          filters={filters}
          setFilters={setFilters}
        />
        <img src={pageCaps} alt="" />
      </aside>
      <ItemList
        items={locations}
        totalDataCount={totalDataCount}
        fetchMoreData={fetchMoreData}
      />
    </main>
  );
}

export default LocationsPage;
