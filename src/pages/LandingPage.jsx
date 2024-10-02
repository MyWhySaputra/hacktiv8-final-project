import CountryList from "../components/CountryList";

export default function LandingPage() {
  return (
    <div className="bg-[#D2E0FB]">
      <div className="container mx-auto p-4 h-screen lg:h-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Country Population Ranking
        </h1>
        <CountryList/>
      </div>
    </div>
  );
}
