import React, { useState, useEffect } from "react";
// import Styles from "./Countries.module.css";
import "./Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
      .then((response) => response.json())
      .then((data) => { console.log(data); return setCountries(data)})
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredCountries);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for countries..."
        className="searchbar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid">
        {filteredCountries.map((country) => (
          <div key={country.common} className="countryCard">
            <img src={country.png} alt={`Flag of ${country.common}`} />
            <p>{country.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;