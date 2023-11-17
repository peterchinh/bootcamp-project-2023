import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema, { IBlog } from "@/database/blogSchema";

// create a new blog schema
export async function POST(req: NextRequest) {
    await connectDB();
    try {
      const newBlog = await req.json(); // parse request as json
      const createdBlog = await blogSchema.create(newBlog);
      return NextResponse.json(createdBlog);
    } catch (err) {
      return NextResponse.json("Error creating blog.", { status: 500 });
    }
  }