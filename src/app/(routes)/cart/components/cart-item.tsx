import { ExternalLinkIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Currency } from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

type CartItemProps = {
  data: Product;
};

export const CartItem = ({ data }: CartItemProps) => {
  const removeItem = useCart(state => state.removeItem);
  return (
    <li className="flex  py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image fill src={data.images[0].url} alt={data.name} className="object-cover object-center" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-4">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={() => removeItem(data.id)} icon={<XIcon size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:-pr-0">
          <Link href={`/product/${data.id}`} className="flex items-center gap-1">
            <p className="text-lg font-semibold text-black">{data.name}</p>
            <ExternalLinkIcon size={14} aria-label="view product" />
          </Link>
          <div className="mt-1 flex text-sm items-center">
            <p className="text-gray-500 flex gap-1 items-center">
              <span className="block border rounded-full w-4 h-4" style={{ backgroundColor: data.color.value }} />
              {data.color.name}
            </p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};
