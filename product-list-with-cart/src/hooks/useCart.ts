import { useState } from "react";
import data from "../data/data.json";
import type { Db, Dessert } from "../types";

export const useCart = () => {
  const [db] = useState<Db[]>(data);
  const [cart, setCart] = useState<Dessert[]>([]);
  const [activeOrder, setActiveOrder] = useState(false);

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

  function deleteFromCart(name: string) {
    setCart(cart.filter((item) => item.name !== name));
  }

  function decrementQuantity(name: string) {
    setCart(
      cart.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: (item.quantity -= 1) }
          : item,
      ),
    );
  }

  function incrementQuantity(name: string) {
    setCart(
      cart.map((item) =>
        item.name === name ? { ...item, quantity: (item.quantity += 1) } : item,
      ),
    );
  }

  function handleActiveOrder() {
    setActiveOrder(true);
  }

  return {
    db,
    cart,
    addToCart,
    deleteFromCart,
    decrementQuantity,
    incrementQuantity,
    handleActiveOrder,
    activeOrder,
  };
};
