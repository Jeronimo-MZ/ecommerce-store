"use client";

import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import { ClientRender } from "@/providers/client-render";

import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

export default function CartPage() {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black mb-12">Shopping Cart</h1>
          <div className=" lg:grid grid-cols-12 items-start gap-x-12">
            <div className="lg:col-span-7">
              <ClientRender>
                {cart.items.length === 0 && <p className="text-neutral-500">No items added to the cart.</p>}
                <ul>
                  {cart.items.map(item => (
                    <CartItem data={item} key={item.id} />
                  ))}
                </ul>
              </ClientRender>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
