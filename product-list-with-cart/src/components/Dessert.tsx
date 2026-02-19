import type { Db, Dessert as Cart } from "../types";

type DessertProps = {
  dessert: Db;
  addToCart: (dessert: Db) => void;
  cart: Cart[];
  decrementQuantity: (name: string) => void;
  incrementQuantity: (name: string) => void;
};

export const Dessert = ({
  dessert,
  cart,
  addToCart,
  decrementQuantity,
  incrementQuantity,
}: DessertProps) => {
  const itemAlreadyInCart = cart.find((item) => item.name === dessert.name);

  return (
    <article className="space-y-8">
      <div className="relative">
        <picture>
          <source srcSet={dessert.image.tablet} media="(max-width: 1200px)" />
          <source srcSet={dessert.image.mobile} media="(max-width: 600px)" />
          <img
            src={dessert.image.desktop}
            alt={`${dessert.name} image`}
            className={`rounded-xl object-cover w-full ${itemAlreadyInCart ? "border-solid border-2 border-red" : ""}`}
          />
        </picture>
        {itemAlreadyInCart ? (
          <div className="flex items-center justify-between gap-2 cursor-pointer font-medium absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-46 p-3 text-white bg-red rounded-full border border-solid border-red">
            <button
              className="w-6 h-6 rounded-full cursor-pointer border-2 border-solid border-white flex items-center justify-center hover:bg-rose-500"
              aria-label="Decrement quantity"
              onClick={() => decrementQuantity(dessert.name)}
            >
              <img
                src="/icon-decrement-quantity.svg"
                alt="Decrement quantity icon"
                width={10}
                height={10}
              />
            </button>
            <p>{itemAlreadyInCart.quantity}</p>
            <button
              className="w-6 h-6 rounded-full cursor-pointer border-2 border-solid border-white flex items-center justify-center hover:bg-rose-500"
              aria-label="Increment quantity"
              onClick={() => incrementQuantity(dessert.name)}
            >
              <img
                src="/icon-increment-quantity.svg"
                alt="Increment quantity icon"
                width={10}
                height={10}
              />
            </button>
          </div>
        ) : (
          <button
            className="flex items-center justify-center gap-2 cursor-pointer font-medium absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-46 py-3 px-6 bg-white text-rose-900 rounded-full border border-solid border-red"
            onClick={() => addToCart(dessert)}
          >
            <img src="/icon-add-to-cart.svg" alt="Cart icon" />
            Add to Cart
          </button>
        )}
      </div>
      <div>
        <p className="font-normal text-rose-400 text-sm">{dessert.category}</p>
        <p className="font-semibold text-rose-900">{dessert.name}</p>
        <p className="font-semibold text-red">${dessert.price}</p>
      </div>
    </article>
  );
};
