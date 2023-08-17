import { BASE_API_URL } from "@/constants";
import { Color } from "@/types";

export async function getColors(): Promise<Color[]> {
  const response = await fetch(`${BASE_API_URL}/colors`);
  const colors = await response.json();
  return colors;
}
