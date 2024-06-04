import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const take = parseInt(searchParams.get("take")) || 10;
  const skip = parseInt(searchParams.get("skip")) || 0;

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: take,
        skip: skip,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.post.count(),
    ]);

    return new NextResponse(
      JSON.stringify({ posts, count }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
