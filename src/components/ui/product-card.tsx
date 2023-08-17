"use client";

import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { usePreviewModal } from "@/hooks/use-preview-modal";
import { Product } from "@/types";

import { Currency } from "./currency";
import IconButton from "./icon-button";

type ProductCardProps = {
  data: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const onPreview = () => {
    previewModal.onOpen(data);
  };

  return (
    <div className="relative group bg-white rounded-xl border p-3">
      <Link href={`/product/${data.id}`} className="space-y-4 outline-none">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image src={data.images[0].url} alt={data.name} fill className="object-cover aspect-square rounded-md" />
        </div>
        <div>
          <p className="font-semibold text-lg group-focus-within:underline group-hover:underline">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <Currency value={data.price} />
        </div>
      </Link>
      <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition w-full absolute left-0 bottom-32">
        <div className="flex gap-x-6 justify-center">
          <IconButton icon={<ExpandIcon size={20} className="text-gray-600" />} onClick={onPreview} />
          <IconButton icon={<ShoppingCartIcon size={20} className="text-gray-600" />} />
        </div>
      </div>
    </div>
  );
};
