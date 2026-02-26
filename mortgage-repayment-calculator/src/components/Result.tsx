export const Result = () => {
  return (
    <section className="bg-slate-900 p-10">
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
    </section>
  );
};
