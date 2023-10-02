"use client";

import { ShoppingBagIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { useCart } from "@/hooks/use-cart";
import { ClientRender } from "@/providers/client-render";

import { Button } from "./ui/button";

export const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center gap-x-2" onClick={() => router.push("/cart")}>
        <ShoppingBagIcon size={20} color="white" />
        <ClientRender>
          <span className="text-md font-medium">{cart.items.length}</span>
        </ClientRender>
      </Button>
    </div>
  );
};
