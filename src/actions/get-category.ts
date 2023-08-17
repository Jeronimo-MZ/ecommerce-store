import { BASE_API_URL } from "@/constants";
import { Result } from "@/lib/result";
import { Category } from "@/types";

export async function getCategory(categoryId: string): Promise<Result<Category>> {
  const response = await fetch(`${BASE_API_URL}/categories/${categoryId}`);
  if (response.status !== 200) return Result.fail(await response.text());
  const category = await response.json();
  return Result.ok(category);
}
