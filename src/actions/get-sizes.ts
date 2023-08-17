import { BASE_API_URL } from "@/constants";
import { Size } from "@/types";

export async function getSizes(): Promise<Size[]> {
  const response = await fetch(`${BASE_API_URL}/sizes`);
  const sizes = await response.json();
  return sizes;
}
