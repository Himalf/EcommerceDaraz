import React from "react";
import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import ProductSingleCard from "./product-single-card";
import Link from "next/link";
type Props = {
  varient: "varient1" | "varient2" | "varient3";
};

export default function ProductList({ varient }: Props) {
  const getGridClasses = (varient: string) => {
    switch (varient) {
      case "varient1":
      case "varient2":
        return "grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center gap-5";
      case "varient3":
        return "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-5";
      default:
        return "";
    }
  };
  return (
    <main>
      <section className={getGridClasses(varient)}>
        {(productData as TProduct[]).map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <ProductSingleCard product={product} varient={varient} />
          </Link>
        ))}
      </section>
    </main>
  );
}
