import { useCountries } from "../store";
import { Card } from "../components/Card";
import { Form } from "../components/Form";

export const Countries = () => {
  const { filteredCountries } = useCountries();

  return (
    <>
      <Form />
      <section className="custom-grid md:gap-24 gap-6">
        {filteredCountries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </section>
    </>
  );
};
