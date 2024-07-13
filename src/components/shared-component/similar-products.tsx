import React from "react";
import ProductList from "../home-page/product/product-list";

type Props = {};

export default function SimilarProducts({}: Props) {
  return (
    <section className="mt-10 container">
      <h3>You may also like</h3>
      <ProductList />
    </section>
  );
}
