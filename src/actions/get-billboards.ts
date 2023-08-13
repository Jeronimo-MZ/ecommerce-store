import { BASE_API_URL } from "@/constants";
import { Billboard } from "@/types";

export async function getBillboards(): Promise<Billboard[]> {
  const response = await fetch(`${BASE_API_URL}/billboards`);
  const billboards = response.json();
  return billboards;
}
