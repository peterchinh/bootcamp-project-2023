import mongoose, { Schema } from "mongoose";
import { IComment } from "./blogSchema"; // Share IComment from blogSchema

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  description: string;
  image: string; //for project image
  link: string; //link to project
  slug: string;
  comments: IComment[]; // array for comments
};


// commentSchema for projectSchema
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [{ type: commentSchema, required: true }],
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
