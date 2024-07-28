"use client";
import React, { useEffect, useState } from "react";
// import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import ProductSingleCard from "./product-single-card";
import Link from "next/link";
type Props = {
  varient: "varient1" | "varient2" | "varient3";
};

export default function ProductList({ varient }: Props) {
  const [data, setData] = useState<TProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
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
        {data.map((product, index) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductSingleCard product={product} varient={varient} />
          </Link>
        ))}
      </section>
    </main>
  );
}
