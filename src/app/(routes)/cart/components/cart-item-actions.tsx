import { TrashIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemActionsProps {
  item: Product & { quantity: number };
}

export function CartItemActions({ item }: CartItemActionsProps) {
  const updateItemQuantity = useCart().updateItemQuantity;
  const removeItem = useCart().removeItem;

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateItemQuantity(item.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          className="h-8 w-8"
          onClick={() => {
            if (item.quantity <= 1) return;
            handleQuantityChange(item.quantity - 1);
          }}
        >
          -
        </Button>
      </div>
      <Input
        className="h-8 w-14 text-xs"
        type="number"
        min="1"
        value={item.quantity}
        onChange={e => {
          handleQuantityChange(Number(e.target.value));
        }}
      />
      <Button
        className="h-8 w-8"
        onClick={() => {
          handleQuantityChange(item.quantity + 1);
        }}
      >
        +
      </Button>
      <Button className="h-8 w-8 p-0" onClick={handleRemoveClick}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
