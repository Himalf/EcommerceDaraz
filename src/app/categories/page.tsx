"use client";
import React from "react";
import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import ProductSingleCard from "@/components/home-page/product/product-single-card";
import ProductList from "@/components/home-page/product/product-list";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type Props = {};

export default function Categories({}: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get("categories");
  const filterCategoryData = productData.filter((product) => {
    return product.category.name === search;
  });

  return (
    <main className="container grid ">
      {filterCategoryData.length > 0}
      <section>
        <h2 className="font-medium text-xl my-2">
          List of Product from {search} category
        </h2>
      </section>
      <section className="grid grid-cols-4">
        {filterCategoryData.length > 0 ? (
          (filterCategoryData as TProduct[]).map((product, ind) => {
            return (
              <Link href={`/products/${product.id}`} key={ind}>
                <ProductSingleCard product={product} varient="varient3" />
              </Link>
            );
          })
        ) : (
          <p>No items Found for {search}</p>
        )}
      </section>
    </main>
  );
}
