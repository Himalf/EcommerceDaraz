import React from "react";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/product-hero";
type Props = {
  params: {
    id: string;
  };
  //   searchParams: {
  //     query: string;
  //     page: string;
  //   };
};

export default function SingleProductPage({ params: { id } }: Props) {
  const product = (productData as TProduct[]).find(
    (singleProduct) => singleProduct.id === id
  );
  if (product === undefined) notFound();
  return (
    <section>
      <SingleProductHero product={product} />
    </section>
  );
}
