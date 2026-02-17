import type { Db } from "../types";

type DessertProps = {
  dessert: Db;
};

export const Dessert = ({ dessert }: DessertProps) => {
  return (
    <article className="space-y-8">
      <div className="relative">
        <picture>
          <source srcSet={dessert.image.tablet} media="(max-width: 1200px)" />
          <source srcSet={dessert.image.mobile} media="(max-width: 600px)" />
          <img
            src={dessert.image.desktop}
            alt={`${dessert.name} image`}
            className="rounded-xl object-cover w-full"
          />
        </picture>
        <button className="flex items-center justify-center gap-2 cursor-pointer font-medium absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-46 py-3 px-6 bg-white text-rose-900 rounded-full border border-solid border-rose-900">
          <img src="/public/icon-add-to-cart.svg" alt="Cart icon" />
          Add to Cart
        </button>
      </div>
      <div>
        <p className="font-normal text-rose-400 text-sm">{dessert.category}</p>
        <p className="font-semibold text-rose-900">{dessert.name}</p>
        <p className="font-semibold text-red">${dessert.price}</p>
      </div>
    </article>
  );
};
