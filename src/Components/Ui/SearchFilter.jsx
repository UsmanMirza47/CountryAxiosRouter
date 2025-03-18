import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  country,
  setCountry,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...country].sort((a, b) => {
      if (value === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setCountry(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button
          onClick={() => {
            sortCountries("asc");
          }}
        >
          Asc
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            sortCountries("dsc");
          }}
        >
          Dsc
        </button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
