import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Country } from "./types";
import data from "./data/data.json";

type State = {
  countries: Country[];
  filteredCountries: Country[];
  theme: "light" | "dark";
  searchQuery: string;
  region: string;
  toggleTheme: () => void;
  setSearchQuery: (query: string) => void;
  setRegion: (region: string) => void;
};

const applyFilters = (countries: Country[], query: string, region: string) => {
  return countries.filter((country) => {
    const matchesRegion =
      region === "all" || country.region.toLowerCase() === region.toLowerCase();

    const matchesQuery = country.name
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesRegion && matchesQuery;
  });
};

export const useCountries = create<State>()(
  persist(
    (set) => ({
      countries: data as Country[],
      filteredCountries: data as Country[],
      theme: "light",
      searchQuery: "",
      region: "all",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      setSearchQuery: (query: string) => {
        set((state) => {
          const newFiltered = applyFilters(
            state.countries,
            query,
            state.region,
          );
          return { searchQuery: query, filteredCountries: newFiltered };
        });
      },

      setRegion: (region: string) => {
        set((state) => {
          const newFiltered = applyFilters(
            state.countries,
            state.searchQuery,
            region,
          );
          return { region: region, filteredCountries: newFiltered };
        });
      },
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
