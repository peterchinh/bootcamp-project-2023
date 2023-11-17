import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import projectSchema, { IProject } from "@/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// Get individual project schema
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure
  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}

// Update individual project schema
export async function PUT(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params; // destructure
  try {
    const update = await req.json(); // parse request as json
    const updatedProject = await projectSchema.findOneAndUpdate(
      { slug },
      update
    );
    return NextResponse.json(updatedProject);
  } catch (err) {
    return NextResponse.json("Error updating project.", { status: 500 });
  }
}
