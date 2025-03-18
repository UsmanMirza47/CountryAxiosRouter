import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ curCountry }) => {
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={curCountry.flags.svg} alt={curCountry.flags.alt} />
        <div className="countryInfo">
          <p className="card-title">
            {curCountry.name.common.length > 10
              ? curCountry.name.common.slice(0, 10) + "..."
              : curCountry.name.common}
          </p>
          <p className="card-description">
            population: <span>{curCountry.population.toLocaleString()}</span>
          </p>
          <p className="card-description">
            Region: <span>{curCountry.region}</span>
          </p>
          <p className="card-description">
            Capital: <span>{curCountry.capital[0]}</span>
          </p>
          <NavLink to={`/country/${curCountry.name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
