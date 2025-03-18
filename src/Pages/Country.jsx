import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi.jsx";
import { Loader } from "../Components/Ui/Loader.jsx";
import CountryCard from "../Components/Layout/CountryCard.jsx";
import SearchFilter from "../Components/Ui/SearchFilter.jsx";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  const searchCountry = (curCountry) => {
    if (search) {
      return curCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    } else {
      return curCountry;
    }
  };

  const filterCountry = (curCountry) => {
    if (filter === "all") {
      return curCountry;
    } else {
      return curCountry.region === filter;
    }
  };

  const filterCountries = country.filter((curCountry) => {
    return searchCountry(curCountry) && filterCountry(curCountry);
  });

  console.log(filterCountries);

  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          country={country}
          setCountry={setCountry}
        />

        <ul className="grid grid-four-cols">
          {filterCountries.map((curCountry, index) => {
            return <CountryCard key={index} curCountry={curCountry} />;
          })}
        </ul>
      </section>
    );
  }
};

export default Country;
