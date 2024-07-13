import React from "react";
import ProductList from "./product-list";

type Props = {};

export default function ProductWrapper({}: Props) {
  return (
    <section className="container">
      <h2 className="text-xl font-semibold">Products</h2>
      <ProductList varient="varient1" />
    </section>
  );
}
