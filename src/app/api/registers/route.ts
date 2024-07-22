import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const registers = await prisma.register.findMany();
  return NextResponse.json(registers);
}
export async function POST(req: NextRequest) {
  const data = await req.json();
  const newPassword = data?.password;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const newRegister = await prisma.register.create({
    data: {
      fullname: data?.fullname,
      email: data?.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    },
  });
  return NextResponse.json({
    data: newRegister,
    message: "Data posted successfully",
  });
}
