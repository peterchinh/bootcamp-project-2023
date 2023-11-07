import styles from "./page.module.css";
import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>
      <div className={styles.blogcontainer}>
        {blogs.map((blog) => (
          <BlogPreview // This is how we call the component
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
