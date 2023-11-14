import { create } from "zustand";

type PreviewModalStore = {
  currency: string;
  setCurrency: (currency: string) => void;
};

export const useCurrency = create<PreviewModalStore>((set, get) => ({
  currency: "USD",
  setCurrency: currency => set({ currency }),
}));
