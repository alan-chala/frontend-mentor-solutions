import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Country } from "./types";
import data from "./data/data.json";

type State = {
  countries: Country[];
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useCountries = create<State>()(
  persist(
    (set) => ({
      countries: data,
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
