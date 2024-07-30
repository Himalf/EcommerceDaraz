import React from "react";
import { TProduct } from "@/types/product";
import ProductSingleCard from "@/components/home-page/product/product-single-card";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function CategoryNames({ params }: Props) {
  let productData: TProduct[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/products?category=${encodeURIComponent(
        params.id
      )}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    productData = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  const normalizedParamId = decodeURIComponent(params.id.trim().toLowerCase());
  const filtercategoryData = productData.filter((product) => {
    return product.category.name.toLowerCase() === normalizedParamId;
  });

  return (
    <main className="container grid">
      <section>
        <h2 className="font-medium text-xl my-2">
          List of Products from {decodeURIComponent(params.id)} category
        </h2>
      </section>
      <section className="grid grid-cols-5 gap-4">
        {filtercategoryData.length > 0 ? (
          filtercategoryData.map((product, ind) => (
            <Link href={`/products/${product.id}`} key={ind}>
              <ProductSingleCard product={product} varient="varient3" />
            </Link>
          ))
        ) : (
          <p>No items found for {params.id}</p>
        )}
      </section>
    </main>
  );
}
