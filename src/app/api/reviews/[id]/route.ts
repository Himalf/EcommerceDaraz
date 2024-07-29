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
  const foundReview = await prisma.review.findFirst({
    where: { id: id },
    include: {
      product: true,
    },
  });
  if (!foundReview) {
    return new NextResponse("no product found for this id", { status: 404 });
  }
  return NextResponse.json({ data: foundReview, message: "review get" });
}
