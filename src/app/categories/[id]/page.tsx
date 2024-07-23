import { useParams } from "next/navigation";
import React from "react";
import ProductData from "@/data/products.json";
import { TProduct } from "@/types/product";
import ProductList from "@/components/home-page/product/product-list";
import SingleProductPage from "@/app/products/[id]/page";
import ProductSingleCard from "@/components/home-page/product/product-single-card";
import Link from "next/link";
type Props = {
  params: {
    id: string;
  };
};

export default function CategoryNames({ params }: Props) {
  const filtercategoryData = ProductData.filter((product) => {
    return product.category.name.toLowerCase() === params.id.toLowerCase();
  });
  return (
    <main className="container grid ">
      {filtercategoryData.length > 0}
      <section>
        <h2 className="font-medium text-xl my-2">
          List of Product from {params.id} category
        </h2>
      </section>
      <section className="grid grid-cols-5">
        {filtercategoryData.length > 0 ? (
          (filtercategoryData as TProduct[]).map((product, ind) => {
            return (
              <Link href={`/products/${product.id}`} key={ind}>
                <ProductSingleCard product={product} varient="varient3" />
              </Link>
            );
          })
        ) : (
          <p>No items Found for {params.id}</p>
        )}
      </section>
    </main>
  );
}
