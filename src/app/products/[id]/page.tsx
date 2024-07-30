import React from "react";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/product-hero";
import ProductDescription from "@/components/single-product-page/product-description";
import ProductReviews from "@/components/single-product-page/product-reviews";
import SimilarProducts from "@/components/shared-component/similar-products";

type Props = {
  params: {
    id: string;
  };
};
export default async function SingleProductPage({ params }: Props) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/${params.id}`,
    { cache: "no-store" }
  );
  const product = await res.json();
  return (
    <section>
      <SingleProductHero product={product.data as TProduct} />
      <ProductDescription product={product.data as TProduct} />
      <ProductReviews product={product.data as TProduct} />
      <SimilarProducts />
    </section>
  );
}
