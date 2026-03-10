import { useCountries } from "../store";
import { Card } from "../components/Card";

export const Countries = () => {
  const { countries } = useCountries();

  return (
    <section className="custom-grid md:gap-24 gap-6">
      {countries.map((country) => (
        <Card key={country.name} country={country} />
      ))}
    </section>
  );
};
