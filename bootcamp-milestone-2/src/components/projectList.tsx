import React from "react";
import style from "./projectList.module.css"
import type { IProject } from "@/database/projectSchema";
import Link from "next/link";
import Image
 from "next/image";
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
        </div>
    );
}