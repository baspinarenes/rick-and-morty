import React from "react";

const getFilterOfType = (type, handleChange) => {
  if (type === "gender") {
    return (
      <select
        name="gender"
        className="w-full mb-2 py-1 px-2"
        onChange={handleChange}
      >
        <option value="" defaultValue disabled>
          Gender
        </option>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    );
  }
  if (type === "status") {
    return (
      <select
        name="status"
        className="w-full mb-2 py-1 px-2"
        onChange={handleChange}
      >
        <option value="" defaultValue disabled>
          Status
        </option>
        <option value="">All</option>
        <option value="">Alive</option>
        <option value="female">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    );
  }

  return (
    <input
      name={type}
      type="text"
      className="w-full mb-2 py-1 px-3"
      placeholder={type[0].toUpperCase() + type.slice(1)}
      onChange={handleChange}
    />
  );
};

function Filters({ filterTypes, filters, setFilters }) {
  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target?.value,
    });
  };

  return (
    <aside className="w-11/12 tablet:flex-none tablet:w-3/12">
      <h2 className="mb-3">Filter</h2>
      {filterTypes.map((type) => getFilterOfType(type, handleChange))}
    </aside>
  );
}

export default Filters;
