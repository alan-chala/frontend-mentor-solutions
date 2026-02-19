import type { Db } from "../types";
import { Dessert } from "./Dessert";

type DessertsProps = {
  db: Db[];
  addToCart: (dessert: Db) => void;
};

export const Desserts = ({ db, addToCart }: DessertsProps) => {
  return (
    <section className="col-span-2">
      <h1 className="text-4xl font-bold mb-6">Desserts</h1>
      <div className="custom-grid">
        {db.map((dessert) => (
          <Dessert key={dessert.name} dessert={dessert} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};
