import React from "react";
import style from "./projectList.module.css"
import type { IProject } from "@/database/projectSchema"
import type { IComment } from "@/database/blogSchema"
import Comment from "@/components/comment"
import AddComment from "./addComment";
import Link from "next/link";
import Image
 from "next/image";

 // Component to render individual projects for portfolio 
export default function ProjectList(props: IProject) {
    return (
        <div className={style.project}>
          <Link href={props.link}>
          <Image src={props.image} width={1280} height={720} alt={props.image}></Image>
          </Link>
          <div className={style.projectdetails}>
            <p className="project-name">{props.title}</p>
            <p className="project-description">
              {props.description}
            </p>
            <Link href={props.link}>Learn More</Link>
          </div>
          <h2>Comments</h2>
          <AddComment slug={`project/${props.slug}/comment`} />
          {props.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment}
            />
          ))}
        </div>
    );
}