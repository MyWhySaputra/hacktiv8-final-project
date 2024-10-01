import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/features/country/countrySlice";
import { Link } from "react-router-dom";
import Select from "react-select";

import FlagDefault from "../assets/default_flag.png";

export default function CountryCompareForm() {
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);

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

  const countryOptions = data
    ? data.map((country) => ({
        value: country.cca2,
        label: country.name.common,
        flag: country.flags.png,
      }))
    : [];

  return (
    <div className="bg-[#D2E0FB]">
      <div className="p-6 mx-auto w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Compare Countries
        </h1>
        <div className="grid grid-cols-2 gap-8 text-center mb-10">
          <div className="card w-full shadow-xl bg-[#FEF9D9]">
            <figure className="px-10 pt-10">
              <img
                src={country1 ? country1.flag : FlagDefault}
                alt="default"
                className="rounded-xl w-auto h-48 bg-white"
              />
            </figure>
            <div className="card-body items-center text-center h-auto">
              <Select
                id="country1"
                options={countryOptions}
                onChange={(selectedOption) => setCountry1(selectedOption)}
                className="mt-1 block w-full"
                placeholder="Search Country 1"
                isSearchable
                maxMenuHeight={200}
                menuPlacement="auto"
                noOptionsMessage={() => "No countries found"}
              />
            </div>
          </div>
          <div className="card w-full shadow-xl bg-[#FEF9D9]">
            <figure className="px-10 pt-10">
              <img
                src={country2 ? country2.flag : FlagDefault}
                alt="default"
                className="rounded-xl w-auto h-48"
              />
            </figure>
            <div className="card-body items-center text-center h-auto">
              <Select
                id="country2"
                options={countryOptions}
                onChange={(selectedOption) => setCountry2(selectedOption)}
                className="mt-1 block w-full"
                placeholder="Search Country 2"
                isSearchable
                maxMenuHeight={200}
                menuPlacement="auto"
                noOptionsMessage={() => "No countries found"}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {country1 && country2 ? (
            <Link
              to={`/compare/${country1.value}/n/${country2.value}`}
              className="text-center btn btn-wide rounded-md"
            >
              Compare
            </Link>
          ) : (
            <button
              className="text-center btn btn-wide rounded-md btn-disabled"
              tabIndex="-1"
              role="button"
              aria-disabled="true"
            >
              Compare
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
