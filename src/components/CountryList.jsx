import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/features/country/countrySlice";

export default function CountryList() {
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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

  const formatPopulation = (index) => {
    if (index >= 1000000) {
      return `${(index / 1000000).toFixed(1)}M`;
    } else if (index >= 1000) {
      return `${(index / 1000).toFixed(1)}K`;
    } else {
      return index.toString();
    }
  };

  return (
    <div className="overflow-x-auto h-[534px] md:h-[400px] bg-[#FEF9D9] rounded-lg mb-4">
      <table className="table table-md table-pin-rows">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
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
