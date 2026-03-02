import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export const Nav = () => {
  const theme = "light";

  return (
    <nav className="flex items-center justify-between shadow md:py-4 md:px-20 p-4">
      <h1 className="md:text-2xl text-xl font-extrabold">
        Where in the world?
      </h1>
      <button className="flex items-center gap-2 p-2 cursor-pointer">
        {theme === "light" ? (
          <>
            <Moon />
            <p className="font-semibold">Dark Mode</p>
          </>
        ) : (
          <>
            <Sun />
            <p className="font-semibold">Light Mode</p>
          </>
        )}
      </button>
    </nav>
  );
};
