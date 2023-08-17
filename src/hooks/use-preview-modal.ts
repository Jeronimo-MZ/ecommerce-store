import { create } from "zustand";

import { Product } from "@/types";

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

export const usePreviewModal = create<PreviewModalStore>(set => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: data => set({ data, isOpen: true }),
  data: undefined,
}));
