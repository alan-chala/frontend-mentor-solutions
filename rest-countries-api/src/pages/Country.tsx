import { useParams } from "react-router-dom";

export const Country = () => {
  const { alpha3Code } = useParams();

  return <section>Aquí va el país... {alpha3Code}</section>;
};
