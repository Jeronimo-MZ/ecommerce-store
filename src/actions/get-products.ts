import qs from "query-string";

import { BASE_API_URL } from "@/constants";
import { Product } from "@/types";

type Filters = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (filters?: Filters): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${BASE_API_URL}/products`,
    query: {
      colorId: filters?.colorId,
      sizeId: filters?.sizeId,
      categoryId: filters?.categoryId,
      isFeatured: filters?.isFeatured,
    },
  });
  const response = await fetch(url, {
    method: "GET",
  });
  return await response.json();
};
