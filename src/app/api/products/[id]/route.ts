import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  if (isNaN(id)) {
    return new NextResponse("please provide a valid id", { status: 400 });
  }

  const foundProduct = await prisma.product.findFirst({
    where: { id: id },
    include: {
      category: true,
      reviews: true,
    },
  });

  if (!foundProduct) {
    return new NextResponse("no product found for this id", { status: 404 });
  }

  console.log(foundProduct, "single product found");
  return NextResponse.json({ data: foundProduct });
}
