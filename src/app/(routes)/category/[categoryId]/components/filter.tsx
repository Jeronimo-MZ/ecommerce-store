"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

type FilterProps = {
  data: Array<Size | Color>;
  name: string;
  valueKey: string;
};

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);
  const router = useRouter();
  const onItemSelected = (item: string) => {
    const current = qs.parse(searchParams.toString());
    const newValue = current[valueKey] === item ? null : item;
    const query = { ...current, [valueKey]: newValue };
    const url = qs.stringifyUrl({ url: window.location.href, query }, { skipNull: true, skipEmptyString: true });
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3>{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map(filter => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 hover:text-white",
                selectedValue === filter.id && "bg-black text-white",
              )}
              onClick={() => onItemSelected(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
