import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";

type Props = {
  product: TProduct;
};

export default function ProductSingleCard({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  const discount = product.discount.toFixed(2);
  return (
    <Card
      className="cursor-pointer h-[300px] overflow-hidden hover:shadow-lg transition-all"
      title={product.name}
    >
      <CardHeader>
        <Image
          src={product.images[0]}
          alt={product.name}
          height={150}
          width={200}
          className="object-contain rounded-lg h-[150px] w-full"
        />
        <CardTitle className="  text-md "></CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="line-clamp-2 font-medium leading-4 text-[15px]">
          {product.name}
        </p>
        <p className="text-primaryColor text-lg font-medium">
          Rs: {discountPrice}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-muted-foreground line-through">
            Rs: {product.price}
          </p>
          <p className="text-gray-700 text-xs">-{discount}%</p>
        </div>
        {/* <span>{product.discount}</span> */}
      </CardContent>
    </Card>
  );
}
