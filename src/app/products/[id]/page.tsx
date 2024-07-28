import React from "react";
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

export default async function SingleProductPage({ params }: Props) {
  let product = null;
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/products/${params.id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    product = await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }

  if (!product) {
    return notFound();
  }

  return (
    <section>
      <SingleProductHero product={product.data as TProduct} />
      <ProductDescription product={product.data as TProduct} />
      <ProductReviews product={product.data as TProduct} />
      <SimilarProducts />
    </section>
  );
}
