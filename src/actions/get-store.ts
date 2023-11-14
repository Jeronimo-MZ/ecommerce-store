import { Store } from "@/types";

export async function getStore(): Promise<Store> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stores/${process.env.NEXT_PUBLIC_STORE_ID}`);
  const store = await response.json();
  return store;
}
