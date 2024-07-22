import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const categoryItem = await prisma.category.findMany({});
}
