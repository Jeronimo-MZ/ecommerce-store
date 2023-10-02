"use client";

import { ExternalLinkIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

import { Button } from "./ui/button";
import { Currency } from "./ui/currency";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(product);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Size: </p>
          <p>{product.size.name}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Color: </p>
          <p className="flex items-center gap-x-2">
            {product.color.name}
            <span className="h-4 w-4 rounded-full border border-gray-600" style={{ background: product.color.value }} />
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Category: </p>
          <p className="flex items-center gap-x-2">
            {product.category.name}
            <Link href={`/category/${product.category.id}`}>
              <ExternalLinkIcon size={14} />
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="flex items-center gap-2 capitalize" onClick={onAddToCart}>
            Add to cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
