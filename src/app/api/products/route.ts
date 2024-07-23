import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return NextResponse.json(data);
}
export async function POST(req: NextRequest) {
  const data = await req.json();
  const newProduct = await prisma.product.create({
    data: {
      name: data?.name,
      price: data?.name,
      description: data?.name,
      discount: data?.discount,
      avgRating: data?.avgRating,
      stockQuantity: data?.stockQuantity,
      category: data?.category,
      categoryId: data?.categoryId,
      images: data?.images,
      reviews: data?.reviews,
    },
  });
  return NextResponse.json({
    data: newProduct,
    message: "New product postedd successfully",
  });
}
