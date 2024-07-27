import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import RatingStars from "@/components/shared-component/rating-stars";

type Props = {
  product: TProduct;
  varient?: "varient1" | "varient2" | "varient3";
};

export default function ProductSingleCard({ product, varient }: Props) {
  return (
    <section>
      {varient === "varient1" && <CardVarient1 product={product} />}
      {varient === "varient2" && <CardVarient2 product={product} />}
      {varient === "varient3" && <CardVarient3 product={product} />}
    </section>
  );
}

function CardVarient1({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  const discount = product.discount.toFixed(2);
  return (
    <>
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
            className="object-cover rounded-lg h-[150px] w-full"
          />
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
    </>
  );
}
function CardVarient2({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  const discount = product.discount.toFixed(2);
  return (
    <>
      <Card
        className="cursor-pointer min-h-[330px] overflow-hidden hover:shadow-lg transition-all"
        title={product.name}
      >
        <CardHeader>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={2000}
            width={200}
            className="object-cover rounded-lg h-[200px] w-full"
          />
          <CardTitle className="  text-md "></CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="line-clamp-2 font-medium leading-4 text-[10px]">
            {product.name}
          </p>
          <p className="text-primaryColor text-lg font-medium">
            Rs: {discountPrice}
          </p>
          {/* <span>{product.discount}</span> */}
        </CardContent>
      </Card>
    </>
  );
}
function CardVarient3({ product }: Props) {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  const deliveryOptions = ["free delivery", "shipping fee", "faster delivery"];
  const randomDeliveryOption =
    deliveryOptions[Math.floor(Math.random() * deliveryOptions.length)];
  const discount = product.discount.toFixed(2);
  return (
    <>
      <Card
        className="cursor-pointer min-h-[360px] overflow-hidden hover:shadow-lg transition-all container  -z-50 relative"
        title={product.name}
      >
        <CardHeader className="">
          <div className="relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              height={150}
              width={200}
              className="object-cover rounded-lg h-[150px] w-full "
            />
            <p className="border  rounded-t-md px-2 text-xs bg-[#26ABD4] text-white w-fit absolute top-0 left-0 ">
              {" "}
              {product.category.name}
            </p>
          </div>
          <p className="flex items-center text-sm">
            <RatingStars rating={product.avgRating} />({product.avgRating})
          </p>

          <p className="border  rounded-t-md px-2 bg-primaryColor text-white w-fit ">
            {/* {randomDeliveryOption} */}
          </p>
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
    </>
  );
}
