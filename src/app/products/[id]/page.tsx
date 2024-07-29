"use client";
import React, { useEffect, useState } from "react";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/product-hero";
import ProductDescription from "@/components/single-product-page/product-description";
import ProductReviews from "@/components/single-product-page/product-reviews";
import SimilarProducts from "@/components/shared-component/similar-products";

type Props = {
  params: {
    id: string;
  };
};

const SingleProductPage: React.FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <SingleProductHero product={product.data as TProduct} />
      <ProductDescription product={product.data as TProduct} />
      <ProductReviews product={product.data as TProduct} />
      <SimilarProducts />
    </section>
  );
};

export default SingleProductPage;
