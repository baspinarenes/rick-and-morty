import React from "react";
import "./Filters.scss";

const getFilterOfType = (type, handleChange) => {
  if (type === "gender") {
    return (
      <select
        name="gender"
        className="w-full mb-2 py-2 px-5"
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
        className="w-full mb-2 py-2 px-5"
        onChange={handleChange}
      >
        <option value="" defaultValue disabled>
          Status
        </option>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    );
  }

  return (
    <input
      name={type}
      type="text"
      className="w-full mb-2 py-2 px-5"
      placeholder={type[0].toUpperCase() + type.slice(1)}
      autoComplete="off"
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

  return <>{filterTypes.map((type) => getFilterOfType(type, handleChange))}</>;
}

export default Filters;
