import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
type Props = {
  params: {
    id: string;
  };
};
export async function GET(requset: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}
