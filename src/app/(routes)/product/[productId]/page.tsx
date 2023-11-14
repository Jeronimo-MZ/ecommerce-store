import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { getStore } from "@/actions/get-store";
import { Gallery } from "@/components/gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import { ErrorPage } from "@/components/ui/error-page";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  if (product.isFailure()) {
    return { title: "Error" };
  }
  return { title: product.getValue().name };
}

export const revalidate = 0;

const ProductPage = async ({ params }: ProductPageProps) => {
  const productResult = await getProduct(params.productId);
  if (productResult.isFailure()) {
    return <ErrorPage message={productResult.errorValue()} />;
  }
  const product = productResult.getValue();
  const suggestedProducts = (await getProducts({ categoryId: product.category.id })).filter(p => p.id !== product.id);
  const store = await getStore();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" data={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
