"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type GalleryTabProps = {
  image: string;
};
export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white outline-none">
      {({ selected }) => (
        <div>
          <span className="absolute w-full h-full inset-0 aspect-square overflow-hidden rounded-md">
            <Image fill src={image} alt="" className="object-cover object-center" />
          </span>
          <span
            className={cn(
              "absolute inset-0 ring-2 ring-offset-2 rounded-sm",
              selected ? "ring-black" : "ring-transparent",
            )}
          />
        </div>
      )}
    </Tab>
  );
};
