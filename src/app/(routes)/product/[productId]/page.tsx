import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { getProduct } from "@/actions/get-product";
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

const ProductPage = async ({ params }: ProductPageProps) => {
  const productResult = await getProduct(params.productId);
  if (productResult.isFailure()) {
    return <ErrorPage message={productResult.errorValue()} />;
  }
  return (
    <Container>
      <pre>{JSON.stringify(productResult.getValue(), null, 2)}</pre>
    </Container>
  );
};

export default ProductPage;
