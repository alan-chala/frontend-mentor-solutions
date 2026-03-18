import type { Country } from "../types";
import { useNavigate } from "react-router-dom";

type CardProps = {
  country: Country;
};

export const Card = ({ country }: CardProps) => {
  const navigate = useNavigate();

  function handleNavigation(alpha3Code: string) {
    const currentRoute: string = `/country/${alpha3Code}`;
    navigate(currentRoute);
  }

  return (
    <article
      className="bg-white dark:bg-blue-900 shadow overflow-hidden rounded-md"
      onClick={() => handleNavigation(country.alpha3Code)}
    >
      <div>
        <img
          src={country.flags.svg}
          className="object-cover h-52 w-full"
          height={280}
        />
      </div>
      <div className="p-8">
        <div>
          <h2 className="text-xl font-extrabold mb-3">{country.name}</h2>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-[14px]">
            Population:{" "}
            <span className="font-normal">{country.population}</span>
          </p>
          <p className="font-semibold text-[14px]">
            Region: <span className="font-semibold">{country.region}</span>
          </p>
          <p className="font-semibold text-[14px]">
            Capital: <span className="font-semibold">{country.capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
};
