import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema, { IBlog, IComment } from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const body = await req.json(); // Parse req body as json
  const { slug } = params;
  // Check if body is valid
  if (!body) { 
    return NextResponse.json("Body not given", { status: 400 });
  }
  try {
    // Find corresponding blog using its slug and push new comment to comments array
    const updatedBlog = await blogSchema.findOneAndUpdate(
        { slug },
        {
            $push: {
                comments: {
                    user: body.user,
                    comment: body.comment,
                    time: new Date(),
                }
            }
        },
        { new: true},
    ).orFail();

    return NextResponse.json(updatedBlog);
  } catch (err) {
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}
