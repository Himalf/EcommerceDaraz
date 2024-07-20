import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userid: string } }
) {
  const id = +params.userid;
  console.log(id, "sdj");
  if (isNaN(id)) {
    return new NextResponse("please prvide an integer id", { status: 400 });
  }
  const foundUser = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  if (!foundUser) {
    return new NextResponse("user not found", { status: 404 });
  }
  return NextResponse.json({
    data: foundUser,
  });
}
