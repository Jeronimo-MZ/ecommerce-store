"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { BASE_API_URL } from "@/constants";
import { useCart } from "@/hooks/use-cart";
import { handleAxiosError } from "@/lib/handle-axios-error";
import { ClientRender } from "@/providers/client-render";

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(`${BASE_API_URL}/checkout`, {
        products: items.map(item => ({ id: item.id, quantity: item.quantity })),
      });
      const sessionUrl = response.data.url as string;
      window.location.assign(sessionUrl);
    } catch (error) {
      const errorMessage = handleAxiosError(error);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <ClientRender>
            <Currency value={total} />
          </ClientRender>
        </div>
      </div>
      <ClientRender>
        <Button
          className="mt-6 w-full"
          disabled={items.length === 0}
          onClick={() => {
            onCheckout();
          }}
          loading={isSubmitting}
        >
          Checkout
        </Button>
      </ClientRender>
    </div>
  );
};
