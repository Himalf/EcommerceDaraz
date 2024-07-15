import ProductList from "@/components/home-page/product/product-list";
import React from "react";

type Props = {};

export default function ProductPage({}: Props) {
  return (
    <main className="container mt-5">
      <ProductList varient="varient3" />
    </main>
  );
}
