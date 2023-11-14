import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

type CartStore = {
  items: Array<Product & { quantity: number }>;
  addItem: (data: Product) => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
};

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: data => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === data.id);
        if (existingItemIndex >= 0) {
          currentItems[existingItemIndex].quantity += 1;
          set({ items: currentItems });
          toast.success("item quantity increased.");
        } else {
          set({ items: [...get().items, { ...data, quantity: 1 }] });
          toast.success("item added to cart.");
        }
      },
      updateItemQuantity: (itemId, quantity) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === itemId);
        if (existingItemIndex < 0) {
          toast.error("item not in cart.");
          return;
        }
        if (quantity <= 0) {
          set({ items: get().items.filter(item => item.id !== itemId) });
          toast.success("item removed from cart.");
          return;
        }
        currentItems[existingItemIndex].quantity = quantity;
        set({ items: currentItems });
        toast.success("item quantity updated.");
      },
      removeItem(id) {
        set({ items: get().items.filter(item => item.id !== id) });
        toast.success("item removed from cart.");
      },
      removeAll() {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
