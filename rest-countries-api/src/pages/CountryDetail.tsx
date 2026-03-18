import { useParams, useNavigate, Link } from "react-router-dom";
import { useCountries } from "../store";
import { ArrowLeft } from "lucide-react";

export const CountryDetail = () => {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();
  const { countries } = useCountries();
  const navigate = useNavigate();

  if (countries.length === 0) {
    return <p>Loading...</p>;
  }

  const currentCountry = countries.find(
    (country) => country.alpha3Code === alpha3Code,
  );

  if (!currentCountry) {
    return <p>Country not found</p>;
  }

  return (
    <section className="space-y-12 text-grey-950 dark:text-grey-50">
      <div>
        <button
          className="flex items-center gap-2 py-2 px-6 rounded-md shadow-md bg-white dark:bg-blue-900"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1">
          <img
            src={currentCountry.flags.svg}
            alt={`${currentCountry.name} flag`}
            className="w-full max-w shadow object-cover h-125"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            {currentCountry.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-[14px]">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Native Name: </span>
                {currentCountry.nativeName ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {currentCountry.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {currentCountry.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {currentCountry.subregion ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {currentCountry.capital ?? "N/A"}
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {currentCountry.topLevelDomain?.[0] ?? "N/A"}
              </p>

              <p>
                <span className="font-semibold">Currencies: </span>
                {currentCountry.currencies?.map((c) => c.name).join(", ") ??
                  "N/A"}
              </p>

              <p>
                <span className="font-semibold">Languages: </span>
                {currentCountry.languages?.map((l) => l.name).join(", ") ??
                  "N/A"}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 text-[14px]">
            <p className="font-semibold">Border Countries:</p>

            <div className="flex flex-wrap gap-2">
              {currentCountry.borders?.length ? (
                currentCountry.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/country/${border}`}
                    className="px-4 py-1 rounded shadow bg-white dark:bg-blue-900 text-sm"
                  >
                    {border}
                  </Link>
                ))
              ) : (
                <span className="text-grey-400">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
