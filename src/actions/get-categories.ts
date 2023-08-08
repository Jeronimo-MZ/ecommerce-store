import { BASE_API_URL } from "@/constants";
import { Category } from "@/types";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_API_URL}/categories`, {
    method: "GET",
  });
  return await response.json();
};
