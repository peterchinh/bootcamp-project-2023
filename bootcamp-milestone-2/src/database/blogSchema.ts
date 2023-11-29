import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // for individual blog page
  comments: IComment[]; // array for comments
  image: string; //for blog image
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ type: commentSchema, required: true }],
  image: { type: String, required: false },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
