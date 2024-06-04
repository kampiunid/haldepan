import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { id } = params; // Ubah slug menjadi id
  
  try {
    const post = await prisma.post.findUnique({ // Gunakan findUnique untuk mencari berdasarkan id
      where: { id }, // Ubah slug menjadi id
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// UPDATE SINGLE POST
export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    const body = await req.json(); // Mengurai body dari request
    const { title, desc, img, catSlug } = body;

    if (!title || !desc || !img || !catSlug) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields!" }, { status: 400 })
      );
    }

    const existingPost = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!existingPost) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }, { status: 404 })
      );
    }

    const updatedPost = await prisma.post.update({
      where: { id: id },
      data: {
        title,
        desc,
        img,
        catSlug,
      },
    });

    return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// DELETE SINGLE POST
export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    const existingPost = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!existingPost) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }),
        { status: 404 }
      );
    }

    await prisma.post.delete({
      where: { id: id },
    });

    return new NextResponse(
      JSON.stringify({ message: "Post deleted successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.log("Error deleting post:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
