import { useState } from "react";
import CountryList from "../components/CountryList";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-[#D2E0FB]">
      <div className="container mx-auto p-4 h-screen lg:h-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Country Population Ranking
        </h1>
        <div className="w-full flex navbar-end mb-6 gap-2">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <CountryList searchQuery={searchQuery} />
      </div>
    </div>
  );
}
