import styles from "./page.module.css";
// import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogList() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <main>
        <h1 className="page-title">Blog</h1>
        <p>No blogs at the moment.</p>
      </main>
    );
  } else {
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
              content={""}
              comments={[]}
              image={""}
            />
          ))}
        </div>
      </main>
    );
  }
}
