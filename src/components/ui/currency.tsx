"use client";

import { useCurrency } from "@/hooks/use-currency";
import { formatMoney } from "@/lib/format-money";

type CurrencyProps = {
  value: string | number;
};

export const Currency = ({ value }: CurrencyProps) => {
  const { currency } = useCurrency();
  return <span className="font-bold">{formatMoney(Number(value) / 100, currency)}</span>;
};
