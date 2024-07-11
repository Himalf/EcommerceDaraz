import React from "react";
import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import ProductSingleCard from "./product-single-card";
import Link from "next/link";
type Props = {};

export default function ProductList({}: Props) {
  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center gap-5">
      {(productData as TProduct[]).map((product, index) => {
        return (
          <Link href={`/products/${product.id}`} key={index}>
            <ProductSingleCard product={product} />
          </Link>
        );
      })}
    </section>
  );
}
