import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany();

  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const newPost = await prisma.post.create({
      data: json,
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}