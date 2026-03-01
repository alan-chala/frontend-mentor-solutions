import { useState } from "react";
import type { State, TotalMortgage } from "../types";
import { ErrorMessage } from "./ErrorMessage";

const initialState: State = {
  amount: "",
  years: "",
  interest: "",
  type: "",
};

type FormProps = {
  calculateMortgage: (mortgage: State) => void;
  setTotalMortgage: React.Dispatch<React.SetStateAction<TotalMortgage>>;
};

export const Form = ({ calculateMortgage, setTotalMortgage }: FormProps) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<State>({
    amount: "",
    years: "",
    interest: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors: State = {
      amount: "",
      years: "",
      interest: "",
      type: "",
    };

    if (!form.amount) {
      newErrors = { ...newErrors, amount: "The amount is required" };
    }
    if (!form.years) {
      newErrors = { ...newErrors, years: "Years is required" };
    }
    if (!form.interest) {
      newErrors = { ...newErrors, interest: "The interest is required" };
    }
    if (!form.type) {
      newErrors = { ...newErrors, type: "Pick up a type" };
    }

    return newErrors;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      return;
    }

    calculateMortgage(form);
    setErrors(initialState);
  };

  function resetForm() {
    setForm(initialState);
    setErrors(initialState);

    const totalState: TotalMortgage = {
      monthly: "",
      total: "",
    };

    setTotalMortgage(totalState);
  }

  return (
    <form className="p-10 space-y-6" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Mortgage Calculator</h1>
        <button
          className="py-2 px-4 rounded-md cursor-pointer text-white bg-slate-900 hover:bg-slate-950 transition duration-150 ease-in disabled:opacity-50"
          onClick={resetForm}
          type="button"
          disabled={!form}
        >
          Clear All
        </button>
      </div>

      <div>
        <label className="font-medium text-slate-700" htmlFor="amount">
          Mortgage Amount
        </label>
        <div
          className={`border-2 mt-3 rounded-md overflow-hidden border-solid flex items-center justify-between mb-3 ${errors.amount ? "border-red" : "border-slate-700"}`}
        >
          <span
            className={`p-3 font-bold text-xl ${errors.amount ? "bg-red text-white" : " bg-slate-100 text-slate-600"}`}
          >
            €
          </span>
          <input
            className="p-3 w-full outline-none"
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
          />
        </div>
        {errors.amount && <ErrorMessage />}
      </div>

      <div className="flex items-center gap-4">
        <div>
          <label className="font-medium text-slate-700" htmlFor="years">
            Mortgage Term
          </label>
          <div
            className={`border-2 mt-3 rounded-md overflow-hidden border-solid flex items-center justify-between mb-3 ${errors.years ? "border-red" : "border-slate-700"}`}
          >
            <input
              className="p-3 w-full outline-none"
              onChange={handleChange}
              type="number"
              id="years"
              name="years"
              value={form.years}
            />
            <span
              className={`p-3 font-bold text-xl  text-slate-600 ${errors.years ? "bg-red text-white" : "bg-slate-100"}`}
            >
              years
            </span>
          </div>
          {errors.years && <ErrorMessage />}
        </div>

        <div>
          <label className="font-medium text-slate-700" htmlFor="interest">
            Interest Rate
          </label>
          <div
            className={`border-2  mt-3 rounded-md overflow-hidden border-solid flex items-center justify-between mb-3 ${errors.interest ? "border-red" : "border-slate-700"}`}
          >
            <input
              className="p-3 w-full outline-none"
              onChange={handleChange}
              type="number"
              id="interest"
              name="interest"
              value={form.interest}
            />
            <span
              className={`p-3 font-bold text-xl  text-slate-600 ${errors.interest ? "bg-red text-white" : "bg-slate-100"}`}
            >
              %
            </span>
          </div>
          {errors.interest && <ErrorMessage />}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-medium text-slate-700" htmlFor="mortgage-type">
          Mortgage Type
        </label>
        <div className="flex items-center gap-4 border-2 border-slate-700 rounded-md border-solid p-3">
          <input
            className="w-5 h-5"
            onChange={handleChange}
            type="radio"
            id="type"
            name="type"
            value="repayment"
            checked={form.type === "repayment"}
          />
          <p className="text-xl font-bold text-slate-900">Repayment</p>
        </div>

        <div className="flex items-center gap-4 border-2 border-slate-700 rounded-md border-solid p-3">
          <input
            className="w-5 h-5"
            onChange={handleChange}
            type="radio"
            id="type"
            name="type"
            value="interest only"
            checked={form.type === "interest only"}
          />
          <p className="text-xl font-bold text-slate-900">Interest Only</p>
        </div>
        {errors.type && <ErrorMessage />}
      </div>

      <div>
        <button
          className="px-4 py-3 bg-lime text-slate-900 font-bold w-full rounded-full cursor-pointer text-xl flex items-center justify-center gap-2 transition duration-150 hover:bg-yellow-400"
          type="submit"
        >
          <img
            src="/icon-calculator.svg"
            alt="Icon calculator"
            width={28}
            height={28}
          />
          Calculate Repayments
        </button>
      </div>
    </form>
  );
};
