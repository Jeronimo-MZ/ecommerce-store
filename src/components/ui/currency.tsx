import { formatMoney } from "@/lib/format-money";

type CurrencyProps = {
  value: string | number;
};

export const Currency = ({ value }: CurrencyProps) => {
  return <p className="font-bold">{formatMoney(Number(value))}</p>;
};
