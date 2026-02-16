import data from "../data/data.json";

export const Summary = () => {
  return (
    <div className="p-10 flex flex-col justify-between gap-8">
      <p className="text-2xl font-bold">Summary</p>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <div
            className={`flex items-center justify-between p-4 rounded-xl ${item.category === "Reaction" ? "bg-light-bg-red" : item.category === "Memory" ? "bg-orange-bg-yellow" : item.category === "Verbal" ? "bg-green-bg-teal" : "bg-cobalt-bg-blue"}`}
          >
            <div className="flex items-center gap-2">
              <img src={item.icon} alt={item.category} />
              <p
                className={`font-bold ${item.category === "Reaction" ? "text-light-red" : item.category === "Memory" ? "text-orange-yellow" : item.category === "Verbal" ? "text-green-teal" : "text-cobalt-blue"}`}
              >
                {item.category}
              </p>
            </div>

            <div>
              <p className="text-dark-gray-blue font-bold">
                {item.score} / <span className="opacity-50">100</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full p-4 rounded-full font-bold text-white bg-dark-gray-blue hover:bg-light-slate-blue cursor-pointer">
        Continue
      </button>
    </div>
  );
};
