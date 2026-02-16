export const Result = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center bg-light-slate-blue p-12 text-white rounded-4xl">
      <p className="text-2xl font-bold text-pale-blue">Your Result</p>

      <div className="bg-violet-blue w-38 h-38 flex flex-col items-center justify-center rounded-full">
        <h1 className="text-7xl font-extrabold">76</h1>
        <p className="font-medium text-light-lavender">of 100</p>
      </div>

      <h2 className="font-extrabold text-xl">Great</h2>

      <p className="font-medium text-pale-blue">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
