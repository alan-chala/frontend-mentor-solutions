import { Search } from "lucide-react";
import { useCountries } from "../store";

export const Form = () => {
  const { setSearchQuery, setRegion, searchQuery, region } = useCountries();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleRegionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.currentTarget.value);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  return (
    <form
      className="flex md:flex-row flex-col gap-6 md:items-center justify-between"
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search countries"
    >
      <div className="flex items-center justify-between bg-white dark:bg-blue-900 rounded-md shadow md:w-112.5 w-full">
        <label className="sr-only" htmlFor="search">
          Search for a country
        </label>
        <span className="p-6" aria-hidden="true">
          <Search size={18} aria-hidden="true" />
        </span>
        <input
          type="search"
          className="py-6 outline-none border-none w-full dark:placeholder:text-white"
          placeholder="Search for a country..."
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="region">
          Filter by region
        </label>
        <select
          className="p-6 bg-white dark:bg-blue-900 rounded-md shadow w-40"
          name="region"
          id="region"
          value={region}
          onChange={handleRegionChange}
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};
