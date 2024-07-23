import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.review.findMany();
  return NextResponse.json(data);
}
export async function POST(req: NextRequest) {
  const data = await req.json();
  const Review = prisma.review.create({
    data: {
      message: data?.message,
      rating: data?.rating,
      username: data?.username,
      productId: data?.productId,
    },
  });
  return NextResponse.json({
    data: Review,
    message: "review data posted successfully",
  });
}
