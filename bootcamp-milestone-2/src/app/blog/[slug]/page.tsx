import { IComment } from "@/database/blogSchema";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "no-store",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}

export default async function BlogPage({ params: { slug } }: Props) {
  const blog = await getBlog(slug);
  if (blog != null) {
    console.log(blog.date);
    return (
      <main>
        <h1 className="page-title">{blog.title}</h1>
        <div>
          <h2>{new Date(blog.date).toDateString()}</h2>
          <Image
            src={blog.image}
            width={500}
            height={500}
            alt={blog.image}
          ></Image>
          <p>{blog.content}</p>
          <Link href="/blog">Back</Link>
        </div>
        <div className={styles.commentSection}>
          <h2>Comments</h2>
          {blog.comments.map((comment: IComment, index: number) => (
            <div key={index} className={styles.comment}>
              <div className={styles.userDate}>
                <div className={styles.user}>{comment.user}</div>
                <div className={styles.date}>
                  {new Date(comment.time).toLocaleDateString()}
                </div>
              </div>
              <div className={styles.commentText}>{comment.comment}</div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
