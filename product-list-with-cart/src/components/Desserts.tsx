import type { Db } from "../types";
import { Dessert } from "./Dessert";

type DessertsProps = {
  db: Db[];
};

export const Desserts = ({ db }: DessertsProps) => {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Desserts</h1>
      <div className="custom-grid">
        {db.map((dessert) => (
          <Dessert key={dessert.name} dessert={dessert} />
        ))}
      </div>
    </section>
  );
};
