"use client";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "../ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) setCount(count - 1);
  };
  const primaryImage = product.images[0];
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  const renderStar = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <main className="grid grid-cols-2 container justify-items-center mt-5 pt-5 ">
      <section>
        <figure>
          <Image
            src={primaryImage}
            alt={product.name}
            height={330}
            width={330}
            className="max-w-full max-h-[400px] object-cover rounded-lg"
          />
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>
        <section className="flex gap-2 mt-2">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {product.images.map((imageUrl, ind) => {
                return (
                  <CarouselItem
                    key={ind}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <figure key={ind}>
                        <Image
                          src={imageUrl}
                          alt={product.name}
                          height={100}
                          width={100}
                          className="rounded-md max-w-[90px] min-h-[90px] max-h-[100px] object-cover"
                        />
                        <figcaption className="sr-only">
                          {product.name}
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </section>
      <section className="flex flex-col gap-5 justify-center ">
        <h1 className="text-xl ">{product.name}</h1>
        <div>
          <div className="flex gap-3 items-center text-xs">
            <p className="flex">{renderStar(product.reviews[0].rating)}</p>
            <p>{product.reviews[0].rating} ratings</p>
          </div>
          <p className="text-primaryColor text-xl font-semibold">
            Rs. {discountPrice}{" "}
          </p>
          <div className="flex items-center gap-2 ">
            <p className="text-sm line-through text-muted-foreground">
              Rs. {product.price}
            </p>
            <span className="text-sm">-{product.discount}%</span>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center ">
            Quantity{" "}
            <FaPlus
              onClick={inc}
              className="text-muted-foreground cursor-pointer"
            />
            {count}
            <FaMinus
              onClick={dec}
              className="text-muted-foreground cursor-pointer"
            />
            <p className="text-muted-foreground text-xs">
              Only {product.stockQuantity} items left
            </p>
          </div>
          <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row gap-5 mt-[5%]">
            <Button
              variant={"link"}
              className="bg-[#26ABD4] text-white max-w-60 w-56 rounded-none"
            >
              Buy Now
            </Button>
            <Button
              variant={"link"}
              className="bg-primaryColor text-white max-w-60 w-56 rounded-none"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProductHero;
