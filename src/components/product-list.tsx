import { Product } from "@/types";

import { NoResults } from "./ui/no-result";
import { ProductCard } from "./ui/product-card";

type ProductListProps = {
  title: string;
  data: Product[];
};

export const ProductList = ({ title, data }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(item => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
