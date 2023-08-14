import { BASE_API_URL } from "@/constants";
import { Result } from "@/lib/result";
import { Product } from "@/types";

export async function getProduct(productId: string): Promise<Result<Product>> {
  const response = await fetch(`${BASE_API_URL}/products/${productId}`);
  if (response.status !== 200) return Result.fail(await response.text());
  const product = await response.json();
  return Result.ok(product);
}
