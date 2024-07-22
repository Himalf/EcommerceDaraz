import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.register.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    return NextResponse.json({ email: user.email }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
