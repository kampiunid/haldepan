import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// GET NEXT POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const currentPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (!currentPost) {
      return new NextResponse(
        JSON.stringify({ message: 'Post not found!' }, { status: 404 })
      );
    }

    const nextPost = await prisma.post.findFirst({
      where: {
        createdAt: {
          gt: currentPost.createdAt,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return new NextResponse(JSON.stringify(nextPost, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
