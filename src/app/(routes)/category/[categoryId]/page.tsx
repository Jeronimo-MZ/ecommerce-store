import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import { ErrorPage } from "@/components/ui/error-page";
import { NoResults } from "@/components/ui/no-result";
import { ProductCard } from "@/components/ui/product-card";

import { Filter } from "./components/filter";
import { MobileFilters } from "./components/mobile-filters";

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = await getCategory(params.categoryId);
  if (category.isFailure()) {
    return { title: "Category not found!" };
  }
  return { title: category.getValue().name };
}

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const categoryResult = await getCategory(params.categoryId);
  if (categoryResult.isFailure()) {
    return <ErrorPage message={categoryResult.errorValue()} />;
  }
  const category = categoryResult.getValue();
  const products = await getProducts({
    categoryId: category.id,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const colors = await getColors();
  const sizes = await getSizes();
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <h3 className="font-bold text-4xl mb-8">{category.name}</h3>
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0 ">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
