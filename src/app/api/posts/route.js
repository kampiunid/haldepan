import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const take = parseInt(searchParams.get("take"));
  const skip = parseInt(searchParams.get("skip"));
  const cat = searchParams.get("cat");
  const type = searchParams.get("type");

  let query = {
    take: take,
    skip: skip,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  switch (type) {
    case 'latest':
      query.orderBy = { createdAt: 'desc' };
      break;
    case 'topall':
      query.orderBy = { views: 'desc' };
      break;
    case 'topweek':
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      query.orderBy = { views: 'desc' };
      query.where = {
        ...query.where,
        createdAt: {
          gte: oneWeekAgo.toISOString(),
        },
      };
      break;
    case 'randall':
      let allPosts = await prisma.post.findMany();
      allPosts = shuffleArray(allPosts);
      const slicedPosts = allPosts.slice(skip, skip + take); // Ambil subset data yang sesuai dengan take dan skip
      return new NextResponse(JSON.stringify({ posts: slicedPosts, count: allPosts.length }, { status: 200 }));
    case 'randweek':
      const oneWeekAgoRand = new Date();
      oneWeekAgoRand.setDate(oneWeekAgoRand.getDate() - 7);
      let allPostsRandWeek = await prisma.post.findMany({
        where: {
          ...query.where,
          createdAt: {
            gte: oneWeekAgoRand.toISOString(),
          },
        },
        orderBy: {
          id: 'asc' // Mengurutkan secara acak berdasarkan id
        }
      });
      allPostsRandWeek = shuffleArray(allPostsRandWeek);
      const slicedPostsRandWeek = allPostsRandWeek.slice(skip, skip + take);
      return new NextResponse(JSON.stringify({ posts: slicedPostsRandWeek, count: allPostsRandWeek.length }, { status: 200 }));
    default:
      break;
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};