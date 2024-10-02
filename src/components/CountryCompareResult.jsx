import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCountriesByCode } from "../redux/features/country/countrySlice";

export default function CountryCompareResult() {
  const { code1, code2 } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );

  useEffect(() => {
    dispatch(fetchCountriesByCode(code1, code2));
  }, [dispatch, code1, code2]);

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

  if (!data || data.length < 2) {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <p className="text-center text-red-500">Error: Data not available</p>
      </div>
    );
  }

  const formatPopulation = (pop) => {
    if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(1)}M`;
    } else if (pop >= 1000) {
      return `${(pop / 1000).toFixed(1)}K`;
    } else {
      return pop.toString();
    }
  };

  return (
    <div className="bg-[#D2E0FB]">
      <div className="container mx-auto p-6 pb-10 h-auto">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 w-full md:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {data[0]?.name?.common}
          </h2>
          <h2 className="text-3xl font-bold text-center mb-8 uppercase">vs</h2>
          <h2 className="text-3xl font-bold text-center mb-8">
            {data[1]?.name?.common}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {data.map((country, index) => (
            <div
              key={index}
              className="card w-full shadow-xl z-10 bg-[#FEF9D9]"
            >
              <figure className="px-10 pt-10">
                <img
                  src={country?.flags?.png || ""}
                  alt={country?.name?.common || "Country flag"}
                  className="rounded-xl w-auto h-48"
                />
              </figure>
              <div className="card-body items-center text-center h-auto">
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Population
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.population
                      ? formatPopulation(country.population)
                      : "N/A"}
                  </p>
                </div>
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Area
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.area?.toLocaleString() || "N/A"} km²
                  </p>
                </div>
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Capital
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.capital || "N/A"}
                  </p>
                </div>
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Region
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.region || "N/A"}
                  </p>
                </div>
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Subregion
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.subregion || "N/A"}
                  </p>
                </div>
                <div className="flex w-3/4 mx-auto">
                  <p className="flex-none w-28 text-lg font-bold text-left">
                    Languages
                  </p>
                  <p className="flex-none w-6 text-lg text-center font-bold">
                    :
                  </p>
                  <p className="grow text-lg text-left">
                    {country?.languages
                      ? Object.values(country.languages).join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to={`/compare`}
            className="text-center btn btn-wide rounded-md"
          >
            Back to Compare
          </Link>
        </div>
      </div>
    </div>
  );
}
