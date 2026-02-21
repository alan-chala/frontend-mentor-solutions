type OrderProps = {
  orderTotal: number;
  handleActiveOrder: () => void;
};

export const Order = ({ orderTotal, handleActiveOrder }: OrderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between py-6">
        <p className="text-rose-900">Order Total</p>
        <p className="font-bold text-red text-3xl">${orderTotal}</p>
      </div>

      <div className="p-4 rounded-xl bg-rose-50 flex items-center justify-center gap-2">
        <img src="/icon-carbon-neutral.svg" alt="Carbon Neutral icon" />
        <p>
          This is a{" "}
          <span className="font-semibold text-rose-900">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <div>
        <button
          type="button"
          aria-label="Confirm order button"
          className="bg-red text-white block w-full rounded-full p-4 cursor-pointer hover:opacity-80 font-semibold"
          onClick={handleActiveOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};
