import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import Image from "next/image";
import { Category } from "@/types/category";
type Props = {
  category: Category;
};

export default function SingleCardComponent({ category }: Props) {
  return (
    <div>
      <Card className="cursor-pointer min-h-[230px] max-h-[230px]">
        <CardHeader>
          <Image
            src={category.imageUrl}
            alt="imagesCategory"
            height={100}
            width={100}
            className="w-full h-[100px] rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-center line-clamp-2">{category.name}</h3>
        </CardContent>
      </Card>
    </div>
  );
}
