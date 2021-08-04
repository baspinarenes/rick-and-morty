import React from "react";

function Filters() {
  return (
    <aside className="w-11/12 tablet:flex-none tablet:w-3/12">
      <h2 className="mb-3">Filter</h2>
      <input
        type="text"
        className="border-2 w-full mb-2 py-1 px-3"
        placeholder="Name"
      />
      <input
        type="text"
        className="border-2 w-full mb-2 py-1 px-3"
        placeholder="Species"
      />
      <input
        type="text"
        className="border-2 w-full mb-2 py-1 px-3"
        placeholder="Type"
      />
      <select
        name="pets"
        id="pet-select"
        className="border-2 w-full mb-2 py-1 px-2"
      >
        <option value="">Gender</option>
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="pets"
        id="pet-select"
        className="border-2 w-full mb-2 py-1 px-2"
      >
        <option value="" disabled>
          Status
        </option>
        <option value="all">Alive</option>
        <option value="female">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </aside>
  );
}

export default Filters;
