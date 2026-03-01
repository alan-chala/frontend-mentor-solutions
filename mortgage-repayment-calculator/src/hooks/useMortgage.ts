import { useState } from "react";
import type { TotalMortgage, State } from "../types";

export const useMortgage = () => {
  const [totalMortgage, setTotalMortgage] = useState<TotalMortgage>({
    monthly: "",
    total: "",
  });

  function calculateMortgageRepayment(mortgage: State) {
    const P = Number(mortgage.amount);
    const annualRate = Number(mortgage.interest);
    const years = Number(mortgage.years);

    const r = annualRate / 100 / 12;
    const n = years * 12;

    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const total = monthly * n;

    const formatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    });

    setTotalMortgage({
      monthly: formatter.format(monthly),
      total: formatter.format(total),
    });
  }

  function calculateMortgageInterestOnly(mortgage: State) {
    const P = Number(mortgage.amount);
    const annualRate = Number(mortgage.interest);
    const years = Number(mortgage.years);

    const r = annualRate / 100 / 12;
    const n = years * 12;

    const monthly = P * r;
    const total = monthly * n + P;

    const formatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    });

    setTotalMortgage({
      monthly: formatter.format(monthly),
      total: formatter.format(total),
    });
  }

  function calculateMortgage(mortgage: State) {
    if (mortgage.type === "repayment") {
      calculateMortgageRepayment(mortgage);
    } else {
      calculateMortgageInterestOnly(mortgage);
    }
  }

  return {
    calculateMortgage,
    totalMortgage,
    setTotalMortgage,
  };
};
