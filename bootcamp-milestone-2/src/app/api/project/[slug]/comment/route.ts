import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";


type IParams = {
    params: {
      slug: string;
    };
  };
  
  export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const body = await req.json(); // parse req body as json
    const { slug } = params;
    // Check if body is valid
    if (!body) {
      return NextResponse.json("Body not given", { status: 400 });
    }
    try {
      // Find corresponding project with its slug and push new comment into comments array
      const updatedProject = await Project.findOneAndUpdate(
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
      return NextResponse.json(updatedProject);
    } catch (err) {
      return NextResponse.json('Internal Server Error', { status: 500 });
    }
  }
