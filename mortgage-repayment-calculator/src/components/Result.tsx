import type { TotalMortgage } from "../types";

type ResultProps = {
  totalMortgage: TotalMortgage;
};

export const Result = ({ totalMortgage }: ResultProps) => {
  return (
    <section className="bg-slate-900 p-10 md:rounded-bl-[120px]">
      {totalMortgage.monthly ? (
        <div>
          <div className="space-y-3 mb-4">
            <h2 className="text-white font-bold text-2xl">Your Results</h2>
            <p className="font-medium text-slate-100">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>

          <div className="rounded-md shadow-xl border-t-4 border-t-lime p-8 space-y-4">
            <div className="py-4 space-y-2">
              <p className="font-medium text-slate-100">
                Your monthly repayments
              </p>
              <p className="font-bold text-5xl text-lime">
                €{totalMortgage.monthly}
              </p>
            </div>
            <div className="border-t-2 border-t-slate-700 py-4 space-y-2">
              <p className="font-medium text-slate-100">
                Total you'll repay over the term
              </p>
              <p className="font-bold text-2xl text-white">
                {totalMortgage.total}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center text-center w-full h-full">
          <img
            src="/illustration-empty.svg"
            alt="Illustration Empty"
            width={200}
            height={200}
          />
          <h2 className="text-white font-bold text-2xl">Result shown Here</h2>
          <p className="text-slate-300">
            Complete the form and click "calculate repayments" to see what your
            mothly repayments would be.
          </p>
        </div>
      )}
    </section>
  );
};
