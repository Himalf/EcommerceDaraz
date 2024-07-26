import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  if (isNaN(id)) {
    return new NextResponse("please provide an id", { status: 400 });
  }
  const foundProduct = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });
  if (!foundProduct) {
    return new NextResponse("no product found for this id", { status: 404 });
  }
  return NextResponse.json({
    data: foundProduct,
  });
}
