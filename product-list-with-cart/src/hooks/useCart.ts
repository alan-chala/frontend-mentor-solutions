import { useEffect, useState } from "react";
import data from "../data/data.json";
import type { Db, Dessert } from "../types";

function initialState(): Dessert[] {
  let localCart = localStorage.getItem("cart");
  return localCart ? JSON.parse(localCart) : [];
}

export const useCart = () => {
  const [db] = useState<Db[]>(data);
  const [cart, setCart] = useState<Dessert[]>(initialState);
  const [activeOrder, setActiveOrder] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  function handleNewOrder() {
    setActiveOrder(false);
    setCart([]);
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
    handleNewOrder,
  };
};
