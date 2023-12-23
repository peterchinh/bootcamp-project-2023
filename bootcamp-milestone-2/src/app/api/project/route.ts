import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import projectSchema, { IProject } from "@/database/projectSchema";

// add project schema
export async function POST(req: NextRequest) {
    await connectDB();
    try {
      const newProject = await req.json(); // parse request as a json
      const createdProject = await projectSchema.create(newProject);
      return NextResponse.json(createdProject);
    } catch (err) {
      return NextResponse.json("Error creating project.", { status: 500 });
    }
  }

  // get all projects
  export async function GET(req: NextRequest) {
    await connectDB(); // function from db.ts before
    try {
      const project = await projectSchema.find().sort({ title: 1}).orFail();
      return NextResponse.json(project);
    } catch (err) {
      return NextResponse.json("Project not found.", { status: 404 });
    }
  }