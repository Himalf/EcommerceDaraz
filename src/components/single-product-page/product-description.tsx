import { TProduct } from "@/types/product";
import React from "react";

type Props = {
  product: Pick<TProduct, "description">;
};

export default function ProductDescription({ product }: Props) {
  return (
    <section className="mt-20 container">
      <h3 className="font-semibold text-xl mb-5">
        You can read about this product
      </h3>
      <p className="leading-7">{product.description}</p>
    </section>
  );
}
