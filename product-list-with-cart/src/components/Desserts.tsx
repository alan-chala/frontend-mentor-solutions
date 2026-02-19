import type { Db, Dessert as Cart } from "../types";
import { Dessert } from "./Dessert";

type DessertsProps = {
  db: Db[];
  cart: Cart[];
  addToCart: (dessert: Db) => void;
  decrementQuantity: (name: string) => void;
  incrementQuantity: (name: string) => void;
};

export const Desserts = ({
  db,
  cart,
  addToCart,
  decrementQuantity,
  incrementQuantity,
}: DessertsProps) => {
  return (
    <section className="md:col-span-2">
      <h1 className="text-4xl font-bold mb-6">Desserts</h1>
      <div className="custom-grid">
        {db.map((dessert) => (
          <Dessert
            key={dessert.name}
            dessert={dessert}
            addToCart={addToCart}
            cart={cart}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
        ))}
      </div>
    </section>
  );
};
