"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import categoriesData from "@/data/categories.json";
import { Category } from "@/types/category";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
type Props = {};

export default function HeroSection({}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <div className="justify-center container items-center p-5 ">
      <Carousel
        className="-z-50"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {(categoriesData as Category[]).map((category, index) => {
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="w-[70%] mx-auto">
                    <CardContent className="flex aspect-video items-center justify-center p-6 w-full mx-auto  max-h-[500px]">
                      <Image
                        src={category.imageUrl}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-cover"
                        alt="New image"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
