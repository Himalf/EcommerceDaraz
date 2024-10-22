import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const categoryItem = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return NextResponse.json(categoryItem);
}
export async function POST(req: NextRequest) {
  const data = await req.json();
  const newCategory = await prisma.category.create({
    data: {
      name: data?.name,
      imageUrl: data?.imageUrl,
      products: data?.products,
    },
  });
  return NextResponse.json({
    data: newCategory,
    message: "data posted successfuly",
  });
}
