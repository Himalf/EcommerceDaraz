import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";
// import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "../ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RatingStars from "../shared-component/rating-stars";
import QuantityInput from "./quantity-input";
type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <main className="grid grid-cols-2 container justify-items-center mt-5 pt-5 ">
      <section>
        <figure className="">
          <Image
            src={product.images[0]}
            alt={product.name}
            height={330}
            width={330}
            loading="lazy"
            className="max-w-full max-h-[400px] min-h-[330px] object-cover rounded-lg"
            // onChange={primaryImg}
          />
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>
        <section className="flex gap-2 mt-2">
          <Carousel className="w-full max-w-sm -z-50">
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
                          loading="lazy"
                          className="rounded-md max-w-[90px]  min-h-[90px] max-h-[100px] object-cover "
                          // onMouseOver={() => {
                          //   setPrimaryImg(imageUrl);
                          // }}
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
            <p className="flex">
              <RatingStars rating={product.avgRating} />
            </p>
            <div className="flex gap-0 items-center">
              <p>{product.avgRating} ratings</p>

              <p>({product.reviews?.length})</p>
            </div>
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
          <section className="flex gap-2 items-center select-none">
            <QuantityInput stockQuantity={product.stockQuantity} />
            <p className="text-xs">
              only <span>{product.stockQuantity}</span> items left
            </p>
          </section>
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
