import { ExternalLinkIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { Product } from "@/types";

import { CartItemActions } from "./cart-item-actions";

type CartItemProps = {
  data: Product & { quantity: number };
};

export const CartItem = ({ data }: CartItemProps) => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image fill src={data.images[0]} alt={data.name} className="object-cover object-center" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-4">
        <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6">
          <Link href={`/product/${data.id}`} className="flex items-center gap-1">
            <p className="text-lg font-semibold text-black">{data.name}</p>
            <ExternalLinkIcon size={14} aria-label="view product" />
          </Link>
          <div className="mt-1 flex text-sm justify-end">
            <p className="text-gray-500 flex gap-1">
              <span className="block border rounded-full w-4 h-4" style={{ backgroundColor: data.color.value }} />
              {data.color.name}
            </p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 flex-1 mt-4">
          <div>
            <p>
              Unit Price: <Currency value={data.price} />
            </p>
            <p>
              Quantity: <span className="font-bold">{data.quantity}</span>
            </p>
            <p>
              Subtotal: <Currency value={data.price * data.quantity} />
            </p>
          </div>
          <div className="mt-auto flex justify-end">
            <CartItemActions item={data} />
          </div>
        </div>
      </div>
    </li>
  );
};
