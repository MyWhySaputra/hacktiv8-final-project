/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/features/country/countrySlice";

export default function CountryList({ searchQuery }) {
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const formatPopulation = (index) => {
    if (index >= 1000000) {
      return `${(index / 1000000).toFixed(1)}M`;
    } else if (index >= 1000) {
      return `${(index / 1000).toFixed(1)}K`;
    } else {
      return index.toString();
    }
  };

  // Helper function to access nested properties
  const getValueByKey = (country, key) => {
    if (key === "name.common") {
      return country.name.common;
    }
    if (key === "capital") {
      return country.capital ? country.capital[0] : "";
    }
    return country[key];
  };

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedCountries = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = getValueByKey(a, sortConfig.key);
      const bValue = getValueByKey(b, sortConfig.key);

      if (typeof aValue === "string") {
        if (sortConfig.direction === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else {
        if (sortConfig.direction === "asc") {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      }
    }
    return 0;
  });

  // Filter countries based on search query
  const filteredCountries = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <p className="text-center text-red-500">Error: {errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto h-[400px] bg-[#FEF9D9] rounded-lg mb-4">
      <table className="table table-md table-pin-rows">
        <thead>
          <tr>
            <th>No</th>
            <th
              onClick={() => handleSort("name.common")}
              className="cursor-pointer"
            >
              Name{" "}
              {sortConfig.key === "name.common" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("region")} className="cursor-pointer">
              Region{" "}
              {sortConfig.key === "region" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th
              onClick={() => handleSort("population")}
              className="cursor-pointer"
            >
              Population{" "}
              {sortConfig.key === "population" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("area")} className="cursor-pointer">
              Area (km²){" "}
              {sortConfig.key === "area" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th
              onClick={() => handleSort("capital")}
              className="cursor-pointer"
            >
              Capital{" "}
              {sortConfig.key === "capital" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => (
            <tr key={country.cca2}>
              <th>{index + 1}</th>
              <td>{country.name.common}</td>
              <td>{country.region}</td>
              <td>{formatPopulation(country.population)}</td>
              <td>{country.area.toLocaleString()}</td>
              <td>{country.capital ? country.capital[0] : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
