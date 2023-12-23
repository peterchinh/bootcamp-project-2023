import { IComment } from "@/database/blogSchema";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/comment";
import AddComment from "@/components/addComment";

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bootcamp-project-2023-eight.vercel.app/api/blog/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  // render blog if fetched successfully
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
          <AddComment slug={`blog/${slug}/comment`} />
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </main>
    );
  } else {
    // Gracefully handle unkown slugs and null blog when fetched
    return (
      <main>
        <h1>Blog not found</h1>
      </main>
    );
  }
}
