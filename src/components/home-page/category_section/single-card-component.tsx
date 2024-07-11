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
      <Card className="cursor-pointer">
        <CardHeader>
          <Image
            src={category.imageUrl}
            alt="imagesdbj"
            height={100}
            width={100}
            className="w-full  h-[100px] rounded-lg object-contain"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-center">{category.name}</h3>
        </CardContent>
      </Card>
    </div>
  );
}
