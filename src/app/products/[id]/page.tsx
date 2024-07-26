import React from "react";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";
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

export default async function SingleProductPage({ params: { id } }: Props) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`);
  const data = await res.json();

  const product = (data as TProduct[]).find(
    (singleProduct) => singleProduct.id === id
  );

  if (!product) {
    return notFound();
  }

  return (
    <section>
      <SingleProductHero product={product} />
      <ProductDescription product={product} />
      <ProductReviews product={product} />
      <SimilarProducts />
    </section>
  );
}
