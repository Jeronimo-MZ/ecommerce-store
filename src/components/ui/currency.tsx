import { formatMoney } from "@/lib/format-money";

type CurrencyProps = {
  value: string | number;
};

export const Currency = ({ value }: CurrencyProps) => {
  return <span className="font-bold">{formatMoney(Number(value))}</span>;
};
