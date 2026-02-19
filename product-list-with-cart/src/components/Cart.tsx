import { useMemo } from "react";
import type { Dessert } from "../types";

type CartProps = {
  cart: Dessert[];
};

export const Cart = ({ cart }: CartProps) => {
  const cartLength = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const orderTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );

  return (
    <>
      {cart.length === 0 ? (
        <section className="w-full md:cols-1">
          <div className="bg-white p-10 rounded-xl w-full">
            <h2 className="text-2xl mb-4 font-bold text-red">
              Your Cart ({cartLength})
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                width={180}
                height={180}
                src="/illustration-empty-cart.svg"
                alt="Illustration Empty Cart"
              />
              <p className="font-semibold text-rose-500">
                Your added item will appear here
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="md:cols-1 w-full">
          <div className="bg-white p-6 rounded-xl">
            <div>
              <h2 className="text-2xl mb-4 font-bold text-red">
                Your Cart ({cartLength})
              </h2>
            </div>

            <div>
              {cart.map((item) => (
                <div
                  className="py-4 flex items-center justify-between border-b border-solid border-rose-100"
                  key={item.name}
                >
                  <div>
                    <div>
                      <p className="font-semibold text-rose-900 mb-1">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="font-semibold text-red">{item.quantity}x</p>
                      <p className="font-semibold text-rose-400">
                        <span className="font-normal">@ ${item.price}</span> $
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button className="cursor-pointer border-2 border-solid border-rose-300 hover:border-rose-900 h-5 w-5 flex items-center justify-center rounded-full">
                      <img
                        src="/icon-remove-item.svg"
                        alt="Remove icon"
                        width={10}
                        height={10}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-6">
                <p className="text-rose-900">Order Total</p>
                <p className="font-bold text-red text-3xl">${orderTotal}</p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 flex items-center justify-center gap-2">
                <img src="/icon-carbon-neutral.svg" alt="Carbon Neutral icon" />
                <p>
                  This is a{" "}
                  <span className="font-semibold text-rose-900">
                    carbon-neutral
                  </span>{" "}
                  delivery
                </p>
              </div>

              <div>
                <button
                  type="button"
                  aria-label="Confirm order button"
                  className="bg-red text-white block w-full rounded-full p-4 cursor-pointer hover:opacity-80 font-semibold"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
