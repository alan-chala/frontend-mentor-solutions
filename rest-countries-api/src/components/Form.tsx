import { Search } from "lucide-react";

export const Form = () => {
  return (
    <form className="flex md:flex-row flex-col gap-6 md:items-center justify-between">
      <div className="flex items-center justify-between bg-white dark:bg-blue-900 rounded-md shadow md:w-112.5 w-full">
        <button className="p-6 cursor-pointer">
          <Search size={18} />
        </button>
        <input
          type="search"
          className="py-6 outline-none border-none w-full dark:placeholder:text-white"
          placeholder="Search for a country..."
          name="search"
          id="search"
        />
      </div>

      <div>
        <select
          className="p-6 bg-white dark:bg-blue-900 rounded-md shadow w-40"
          name="region"
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};
