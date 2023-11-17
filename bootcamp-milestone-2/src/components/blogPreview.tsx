import React from "react";
import style from "./blogPreview.module.css";
// import type { Blog } from '@/app/blogData'
import type { IBlog } from "@/database/blogSchema";
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  return (
    // Generate HTML block from Blog prop
    <div className={style.div}>
      <h3>{props.title}</h3>
      <p>{props.date.toDateString()}</p>
      <p>{props.description}</p>
      <Link href={`/blog/${props.slug}`}>See more</Link>
    </div>
  );
}
