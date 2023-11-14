"use client";

import { useEffect } from "react";

import { useCurrency } from "@/hooks/use-currency";

export const CurrencyProvider = ({ currency }: { currency: string }) => {
  const setCurrency = useCurrency().setCurrency;
  useEffect(() => {
    setCurrency(currency);
  }, [currency, setCurrency]);
  return null;
};
