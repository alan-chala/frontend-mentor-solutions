import { useState } from "react";
import data from "../data/data.json";
import type { Db, Dessert } from "../types";

export const useCart = () => {
  const [db] = useState<Db[]>(data);
  const [cart, setCart] = useState<Dessert[]>([]);

  function addToCart(dessert: Db) {
    const itemExist = cart.find((item) => item.name === dessert.name);

    if (itemExist) {
      setCart(
        cart.map((item) => {
          if (item.name === itemExist.name) {
            return { ...item, quantity: (item.quantity += 1) };
          } else {
            return item;
          }
        }),
      );
    } else {
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  }

  return {
    db,
    cart,
    addToCart,
  };
};
