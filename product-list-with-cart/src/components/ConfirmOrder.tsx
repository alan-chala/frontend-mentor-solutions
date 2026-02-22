import { useMemo } from "react";
import type { Dessert } from "../types";

type ConfirmOrderProps = {
  cart: Dessert[];
  handleNewOrder: () => void;
};

export const ConfirmOrder = ({ cart, handleNewOrder }: ConfirmOrderProps) => {
  const orderTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );

  return (
    <section className="bg-white md:p-8 p-4 md:rounded-xl space-y-4 fixed z-20 left-1/2 top-1/2 -translate-1/2 md:w-xl md:h-min w-full h-full transition duration-150 ease-in">
      <div>
        <img
          className="w-14 h-14"
          src="/icon-order-confirmed.svg"
          alt="Order confirmed icon"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold">Order Confirmed</h2>
        <p className="text-rose-500">We hope you enjoy your food!</p>
      </div>

      <div className="bg-rose-50 rounded-md md:px-6 md:py-2 p-4">
        {cart.map((item) => (
          <article
            key={item.name}
            className="flex items-center justify-between border-b border-solid border-rose-100 md:py-4 py-3"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <img
                  src={item.image.thumbnail}
                  alt={item.name + "image"}
                  className="object-cover rounded-md"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <p className="text-rose-900 font-semibold">{item.name}</p>
                <p className="text-red font-semibold">
                  {item.quantity}x{" "}
                  <span className="text-rose-500 font-normal">
                    @ ${item.price}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl text-rose-900">
                ${item.quantity * item.price}
              </p>
            </div>
          </article>
        ))}

        <div className="flex items-center justify-between py-6">
          <p className="text-rose-900">Order Total</p>
          <p className="font-bold text-red text-2xl">${orderTotal}</p>
        </div>
      </div>

      <div>
        <button
          className="block w-full rounded-full bg-red text-white font-semibold cursor-pointer hover:bg-amber-600 transition duration-150 py-4"
          type="button"
          onClick={handleNewOrder}
          aria-label="Start new order"
        >
          Start New Order
        </button>
      </div>
    </section>
  );
};
