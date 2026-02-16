export const Result = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-between text-center bg-light-slate-blue p-12 text-white md:rounded-4xl rounded-b-4xl">
      <p className="text-2xl font-bold text-pale-blue">Your Result</p>

      <div className="bg-violet-blue w-38 h-38 flex flex-col items-center justify-center rounded-full">
        <h1 className="text-7xl font-extrabold">76</h1>
        <p className="font-medium text-light-lavender">of 100</p>
      </div>

      <div>
        <h2 className="font-extrabold text-3xl mb-4">Great</h2>

        <p className="font-medium text-pale-blue">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};
